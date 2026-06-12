# jiagebiao

## 本地更新产品信息

在本地维护产品时，先启动同步服务：

```bash
python3 local-sync-server.py
```

然后打开：

```text
http://127.0.0.1:4173
```

在后台修改产品并点击“保存当前编辑”后，页面会自动写入 `product-catalog.json`。之后只需要告诉 Codex“更新产品信息”，Codex 就可以直接提交并推送 GitHub，不需要再手动提供 JSON。
