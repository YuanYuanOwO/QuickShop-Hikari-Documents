# 0x02 Getting Instances

QuickShop-Hikari 有两种类型的实例。

- QuickShopAPI - 包含开发插件所需的 API。
- 当您需要使用QuickShop-Hikari时，可以使用QuickShop-QuickShop内部实例。

## 代码示例

有多种方法可以获取 QuickShop 的实例。

### 使用静态方法获取

```java

QuickShopAPI api = QuickShopAPI.getInstance();
QuickShop internalInstance = QuickShopAPI.getPluginInstance();

```

### 使用 Bukkit Service Manager

```java
RegisteredServiceProvider<QuickShopProvider> provider = Bukkit.getServicesManager().getRegistration(QuickShopProvider.class);
  if (provider == null) {
    throw new IllegalStateException("QuickShop hadn't loaded at this moment.");
  }
    QuickShopAPI api = provider.getProvider().getApiInstance();
    QuickShop internalInstance = provider.getProvider().getPluginInstance();
```

### 内部直接调用

:::warn

不建议使用此方法，因为兼容性可能较差。

:::

```java
QuickShopAPI api = (QuickShopAPI)QuickShop.getInstance();
QuickShop internalInstance = QuickShop.getInstance();
```

### You're done

当你获得插件 API 的实例后，大多数操作都可以通过实例完成。