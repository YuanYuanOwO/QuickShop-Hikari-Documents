# 黑名单系统

服务器管理员可以禁止在某些世界创建商店，或禁止某些物品的出售 / 收购

## 世界黑名单

增加到 `shop.blacklist-world` 中的世界将会被禁止创建新的商店。

```yaml
shop:
  # 禁止创建新商店的世界列表
  blacklist-world:
    - disabled_world_name
```

## 物品黑名单

### 基于物品名

服务器管理员可以将禁止商店出售 / 收购的物品名添加到 config.yml 的 `blacklist` 中：

```yaml
# 无法被销售的物品
# 拥有 quickshop.bypass.<itemID> 权限的玩家可以绕过
#通过在名称前添加 @ 来引用项目查找表。
#对于被引用的物品，将使用权限  quickshop.bypass.reference 进行检查。
blacklist:
  - Bedrock
```

`blacklist` 支持使用 [物品引用功能](../item-ref.md) 中的物品。

### 基于物品 Lore

服务器管理员可以将禁止商店出售 / 收购的物品 Lore 添加到 config.yml 的 `shop.blacklist-lores` 中：

```yaml
shop:
  # 包含以下内容的物品将不能售卖。
  # 这不会影响已存在的商店！
  blacklist-lores:
    - "灵魂绑定"
```

### 早期商店

您新添加的黑名单规则只能限制新的商店创建，现有的商店不会受影响。
