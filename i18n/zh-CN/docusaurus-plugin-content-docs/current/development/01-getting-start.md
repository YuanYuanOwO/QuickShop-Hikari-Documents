# 0x01 Getting Started

Hello! 你好呀~ 欢迎来到QuickShop-Hikari的开发者社区！

本系列文章将帮助您构建 QuickShop-Hikari 的插件或将其与您的服务器深度整合。

## License

QuickShop-Hikari 以 [GPLv3协议](https://www.gnu.org/licenses/quick-guide-gplv3.en.html) 许可证开源，你可以随时在 [Github 页面](https://github.com/QuickShop-Community/QuickShop-Hikari) 浏览本项目的源码。\
你可以自由修改或使用 QuickShop-Hikari 任意部分的代码，但前提是遵守 GPLv3 协议。\
You are free to modify and use any part of QuickShop-Hikari's source code as long as you adhere to the GPLv3 agreement.

## 🚧不要太相信 Javadoc

QuickShop 已经有 10 多年的历史了（自 2012 年 7 月 18 日起由 netherfoam 发起），而 Javadoc 可能非常陈旧且不准确。 尽管我们经常修改 Javadoc，但其中绝大部分仍然很陈旧。 当文章与 Javadoc 中的内容发生冲突时，请参考此文章。
Although we revise the Javadoc frequently, most of it is still quite old.
When there is a conflict between the article and the content in the Javadoc, please refer to the article.

## 添加 Maven 存储库

```xml
<repositories>
    <repository>
        <id>codemc</id>
        <url>https://repo.codemc.io/repository/maven-public/</url>
    </repository>
</repositories>

<dependencies>
<dependency>
    <groupId>com.ghostchu</groupId>
    <artifactId>quickshop-bukkit</artifactId>
    <version>在此填入版本</version>
    <scope>provided</scope>
</dependency>
<!--你还需将 quickshop-common 模块导入你的项目，这样它才会帮你解析本插件使用的其他第三方库-->
<dependency>
    <groupId>com.ghostchu</groupId>
    <artifactId>quickshop-common</artifactId>
    <version>在此填入版本</version>
    <scope>provided</scope>
</dependency>
</dependencies>
```

## 线程控制

QuickShop-Hikari 将操作源分为三种类型：

- 服务器主线程
- 异步线程（任何其他线程，但不包括服务器主线程）
- Hybird

如果通过错误的线程访问 API，QuickShop-Hikari 将强制性显示运行错误。

尽管 QuickShop-Hikari 的许多部分在内部设计为线程安全，但使用 Bukkit API 操作的 API 仍然要求您使用主服务器线程进行调用。

对于可能触发网络 IO 或长时间磁盘 IO 的 API，您不需要在服务器主线程上执行它们。

你可以浏览 [Util.ensureThread()](https://github.com/QuickShop-Community/QuickShop-Hikari/blob/3d1d271e1106ea1c83cc6068f8232ab7c7860918/quickshop-bukkit/src/main/java/com/ghostchu/quickshop/util/Util.java#L351) 并通过查找用法得出不同 API 的使用条件。 默认情况下，允许从任何线程调用不使用 Util.ensureThread() 的 API。 APIs that do not use Util.ensureThread() are allowed to be called from any thread by default.

您不应绕过此限制，我们只是在必要时添加此检查，它是插件性能和服务器稳定性的最基本保证。 如果您触发了线程检查，请使用调度器来完成您的任务。
