#!/usr/bin/env python3
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from datetime import datetime, timezone
import json

ROOT = Path(__file__).resolve().parent
CATALOG_FILE = ROOT / "product-catalog.json"
PORT = 4173


def valid_catalog(payload):
    products = payload.get("products") if isinstance(payload, dict) else None
    if not isinstance(products, list) or not products:
        return False
    return all(
        isinstance(product, dict)
        and product.get("id")
        and product.get("grade")
        and product.get("name")
        for product in products
    )


class CatalogSyncHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        if self.path.startswith("/product-catalog.json"):
            self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_POST(self):
        if self.path != "/api/catalog-sync":
            self.send_error(404)
            return

        try:
            length = int(self.headers.get("Content-Length", "0"))
            payload = json.loads(self.rfile.read(length).decode("utf-8"))
            if not valid_catalog(payload):
                raise ValueError("invalid catalog")
            payload["version"] = datetime.now(timezone.utc).strftime("%Y-%m-%d-local-admin-sync")
            payload["syncedAt"] = datetime.now(timezone.utc).isoformat()
            payload["source"] = "local-admin-sync"
            CATALOG_FILE.write_text(
                json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
                encoding="utf-8",
            )
        except Exception as error:
            body = json.dumps({"ok": False, "error": str(error)}).encode("utf-8")
            self.send_response(400)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return

        body = json.dumps({"ok": True, "file": str(CATALOG_FILE)}).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", PORT), CatalogSyncHandler)
    print(f"本地同步服务已启动：http://127.0.0.1:{PORT}")
    print("在这个地址修改后台并保存后，product-catalog.json 会自动更新。")
    server.serve_forever()
