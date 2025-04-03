# 系统商店（无限商店）

QuickShop 支持您将商店设置为“系统商店”，从而创建一个无限制库存（出售）或无限容量（收购）的商店。

## Owner Mechanism

尽管您将一个商店设置为“系统商店”，**商店的店主也仍然是您！**

## 将商店设置为系统商店

看向本插件的商店并输入命令 `/quickshop unlimited` 即可将其在有限与无限模式间切换。

| 无限商店                                   | 普通商店（缺货）                               |
| -------------------------------------- | -------------------------------------- |
| ![adminshop](img/a-unlimited-shop.png) | ![regularshop](img/a-limited-shop.png) |

## 切换到系统商店时自动更改店主

您可以打开 config.yml 中的 `unlimited-shop-owner-change`，然后将 `unlimited-shop-owner-change-account` 设置为一个用户名或用户 ID。 **未来设置的**系统商店将会自动转移给此玩家。 Then all **new** unlimited shops will automatically transfer to specific player.

The mechanic is not limited by the option that control maximum number of stores a player can create.