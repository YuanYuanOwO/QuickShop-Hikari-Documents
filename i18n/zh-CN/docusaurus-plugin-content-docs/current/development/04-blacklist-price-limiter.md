# 0x04 黑名单（Blacklist）与价格限制（PriceLimiter）

在编写代码的过程中，你可能需要使用 QuickShop-Hikari 的黑名单与价格限制。 有了 ItemExpansion，开发者就无需自行解析表达式。
Thanks to ItemExpression, you definitely do not want to parse expressions yourself.

## 检查指定物品是否可以用于开设商店

```java
  boolean shoppable = Util.isShoppables(material);
```

## 检查物品是否处于黑名单

```java
ItemStack stack = ...;
QuickShopAPI api = ...;

ShopItemBlackList blacklist = api.getShopItemBlackList();
boolean blacklisted = blacklist.isBlacklisted(stack);
```

## 检查给定价格是否在允许范围内

```java
ItemStack stack = ...;
ShopManager manager = ...;
PriceLimiter limiter = manager.getPriceLimiter();
PriceLimiterCheckResult result = limiter.check(player/sender, stack, currency, price);

double min = result.getMin();
double max = result.getMax();
PriceLimiterStatus status = result.getStatus();

// 状态（status）可为
//PASS
//REACHED_PRICE_MAX_LIMIT (未使用)
//REACHED_PRICE_MIN_LIMIT (未使用)
//PRICE_RESTRICTED (常使用)
//NOT_A_WHOLE_NUMBER
//NOT_VALID
```

