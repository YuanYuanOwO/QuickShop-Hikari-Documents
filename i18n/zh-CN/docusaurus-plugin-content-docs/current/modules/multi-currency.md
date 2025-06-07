# 多币种支持

QuickShop-Hikari支持一些多货币经济插件或桥接插件，但它们不是开箱即用的，您必须配置它们才能生效。

## 支持的经济插件

QuickShop-Hikari currently supports multi-currency economy plugins that support [VaultUnlocked](https://modrinth.com/plugin/vaultunlocked)

<!--* Any other economy plugin that support [Reserve](https://www.spigotmc.org/resources/50739/)-->

## Enable Multi-Currency support

To enable multi-currency feature, you need to use VaultUnlocked instead of the Vault plugin

```yaml
#What economy provider should QuickShop use?
#0=Vault/VaultUnlocked - VaultUnlocked supports multi-currency if you economy plugin supports it.
#DO NOT TOUCH THIS IF YOU DON'T KNOW WHAT IT DOES. ASK FOR SUPPORT BEFORE TOUCHING THIS!
economy-type: 0
```

## 商店默认货币

您需要为默认使用设置一种货币（例如新商店默认货币），并在 config.yml 中进行配置：

```yaml
# The currency used to create shops.
# Set this to "" to use default currency.
# Only required if you use multiple currencies.
currency: ''
```

## 设置多货币备用符号

您可以为符号设置备用符号，QuickShop-Hikari将在文本中对特定货币的符号替换为备用符号。

```yaml
  # This setting is for multi-currency setups.
  # If nothing matches in this list, it falls back to the name of currency itself.
  alternate-currency-symbol-list:
  - USD;$
  - CNY;￥
```

## 更改商店的货币

Looking at a shop, execute `/quickshop currency <new-currency>` to change shop currency.

## 持续费用货币

OngoingFee will always use server scope default currency (`currency`).

## 商店税收货币

Shop tax will use per-shop currency with global tax rate (cannot change yet).\
If you really want this feature, open a Feature Request on our Issue Tracker!