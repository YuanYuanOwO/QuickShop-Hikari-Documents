# 网络和代理

大多数QuickShop-Hikari网络请求不使用系统代理。

## User-Agent

用户代理是不可更改的，它强制硬代码为：

```plain
QuickShop/<fork-name>-<version> Java/<java-version>
```

它看起来像这样：

```plain
QuickShop/Hikari-3.4.0.2 Java/17.0.3
```

## HTTP 代理

在大多数情况下，您不需要这么做，但在一些国家，您可能无法访问我们的云服务，如CrowdinOTA或Paste。

要配置 http 代理，您需要在您的 JVM 启动命令行中添加参数。

```bash
java -Xmx4G ... <JVM FLAG> ... -jar server.jar nogui
```

## 设置代理 JVM 标志

### 无身份验证

```bash
-Dcom.ghostchu.quickshop.QuickShopBukkit.proxyHost=<host> -Dcom.ghostchu.quickshop.QuickShopBukkit.proxyPort=<port>
```

### 基本身份验证

```bash
-Dcom.ghostchu.quickshop.QuickShopBukkit.proxyHost=<host> -Dcom.ghostchu.quickshop.QuickShopBukkit.proxyPort=<port> -Dcom.ghostchu.quickshop.QuickShopBukkit.proxyUsername=<user> -Dcom.ghostchu.quickshop.QuickShopBukkit.proxyPassword=<password>
```

## 禁用 SSL 验证

要强制忽略 SSL 错误，您可以添加此启动标志来禁用 SSL 验证。

```bash
-Dcom.ghostchu.quickshop.QuickShopBukkit.verifySSL=false
```
