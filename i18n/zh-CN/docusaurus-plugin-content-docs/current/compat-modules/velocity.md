# Velocity

:::info

找不到在哪里下载JAR？ [点击这里](../faq/where-addons-compacts-at.md). [Click here](../faq/where-addons-compacts-at.md).

:::

这是一个 Velocity 插件，你需要在你的 Velocity 的插件文件夹中安装它

## 它是如何工作的？

Velocity Bridge 插件将注册 `quickshop:bungee` 频道用于转发玩家聊天，当子服务器等待玩家输入时会将聊天强制转发到子服务器。 （是的，即使是 Velocity 也会使用 `bungee` 频道。） (yes, even Velocity will also use `bungee` channel.)

所有转发都由 QuickShop-Hikari 在 Spigot 服务器上发起，并在不需要时停止。

## Spigot 侧子服的额外设置

你可能需要将启动参数 `-Dcom.ghostchu.quickshop.util.Util.forceBungeeCord=true` 加入开服脚本，使得本插件能够注册通信通道，因为默认情况下 Hikari 不会自行检测 Velocity 是否存在。
