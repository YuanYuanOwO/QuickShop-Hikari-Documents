# 隐私政策

当使用QuickShop-Hikari时，我们将向相关的服务提供商发送必要和部分的可选数据。

## bStats

我们使用 [bStats.org](https://bstats.org/) 来收集统计指标，以便更好地改进我们的产品。

[bStats的隐私政策](https://bstats.org/privacy-policy)

收集到的所有数据将显示在此页面上： [bStats - QuickShop-Hikari](https://bstats.org/plugin/bukkit/QuickShop-Hikari/14281)

### 退出 bStats 统计

如果你要退出 bStats 统计，您可以在 QuickShop-Hikari 的配置文件中禁用 bStats 服务：

```yaml
# 禁止 QuickShop 向 bStats 发送统计数据
# 请将其保持开启，这能帮到作者 :)。
disabled-metrics: false
```

Note: The collected data won't deleted from bStats, to remove exists data, please contact bStats administrators.\
注意：收集到的数据不会从 bStats 中删除，要删除存在的数据，请联系 bStats 管理员。\
注意：我们尊重您的 bStats 全局设置。如果您在全局禁用了bStats，我们不会向bStats发送任何数据。

## RollBar错误跟踪

We use [Rollbar](https://rollbar.com/) to collect error reports. 我们使用 [Rollbar](https://rollbar.com/) 来收集错误报告。 您服务器上与QuickShop-Hikari有关的所有错误将自动提交给我们的 Rollbar.

您可以在这里查看 Rollbar 的隐私政策 [](https://docs.rollbar.com/docs/privacy-policy)。

包括:

- 时间
- 错误和堆栈跟踪
- 操作系统
- OS Arch
- 操作系统版本
- 系统 CPU 核心
- Java版本
- 服务器/Bukkit 构建版本
- 玩家数量
- 在线模式
- 您的 QuickShop-Hikari 个人ID

### 重新生成 QuickShop-Hikari 个人ID

当您首次安装QuickShop-Hikari时，您的个人ID将被生成并写入 `config.yml`。\
ID的生成完全随机，不以其他信息作为参考。个人ID用于我们的错误信息跟踪以及其他适用于 QuickShop-Hikari 的场景。\
The ID does not depend on any other information for calculation and is completely random, It is used in our bug tracking and other scenarios where different QuickShop-Hikari instances need to be identified.

如果没有插件正在使用此ID，您可以从配置文件中删除它，以便QuickShop-Hikari能够生成一个新的个人ID。

### 退出Rollbar错误跟踪

若要退出 Rollbar 错误跟踪，您可以在 QuickShop-Hikari 的配置中禁用 Rollbar 服务：

```yaml
# QS 是否允许自动向作者报告错误？
# 这会在服务器启动时自动创建数据恢复或调试用的剪贴板。
auto-report-errors: true
```

注意：收集到的数据将不会从Rollbar删除，要删除存在的数据，请联系 QuickShop-Hikari 开发人员。

## Paste

通过 `/quickshop paste` 创建剪贴板内容后，你的数据将会被上传至 [Lucko 的 bytebin 剪贴板](https://bytebin.lucko.me/)。\
若要防止数据上传，你可以通过命令 `/quickshop paste file` 保存至硬盘，这些内容将会留在本地而不会上传至网络。\
To avoid data uploading, you can create local paste by using command `/quickshop paste file`, the paste will save to your local disk without uploading.

Github 页面上的Paste预览主机通过CloudFlare Worker访问上传的数据。

当我们生成您的Paste时，我们会检查您的敏感数据。不要将您的Paste发送给您不信任的人。

## IP 检测

我们将向CloudFlare 发送一个 IP 查询请求，以确定您的服务器是否位于中国大陆。 有关更多信息，请参阅： [区域法律限制](netease.md). For more information, please see: [Regional legal restrictions](netease.md).

IP查询请求将在此网页上： `https://cloudflare.com/cdn-cgi/trace`.

## 更新

为了检查更新，QuickShop-Hikari将请求CodeMC.io的Nexus检查更新。

要禁用更新检查，您可以通过调整配置来关闭它：

```yaml
# 是否允许 QS 检查更新？
updater: false
```

## 捐赠

当您在 ko-fi.com 捐款时，ko-fi 将收集您的个人数据，请单击此处 [](https://more.ko-fi.com/privacy) 查看 ko-fi 的隐私政策。

您的个人数据也将发送到Ghost_chu的网络服务器，以便在我们的支持者列表中展示您的名字，包括：

- 时间
- 您的Ko-fi用户名.
- 捐赠类型
- 是否公开
- 消息 ID
- 消息
- 交易ID
- 等级名称

The data collected is stored in the territory of the People's Republic of China and is managed in accordance with the relevant laws and regulations of the server location (Beijing).\
收集的数据存放在中华人民共和国境内，并按照服务器所在地（北京）的有关法律和条例进行管理。\
要删除您的数据，请联系 QuickShop-Hikari 开发人员。

以下数据将在 [这里为每个人显示](https://quickshop-kofi-proxy.ghostchu.workers.dev/)：

- 时间
- 类型
- 您的 Ko-fi 用户名

如果您的捐赠设置为私人捐赠，它将不会显示。
