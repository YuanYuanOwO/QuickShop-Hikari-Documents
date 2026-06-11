# Frequently Asked Questions

### Can I create a shop that sells AND buys items?

> No. Each shop can only sell or buy but not both at once. You can however use a double-chest to have two shops. One buying and one selling the item.

### Can I use item-based currency (e.g., diamonds)?  

> No. We won't add it. However, you can use economy plugins that support item-based currencies.

### The plugin doesn't respond when creating a shop. Is it broken?

> Some plugins may cancel shop creation. Most commonly is this the case with protection plugins. You can disable the shop.protection-checking in the config to bypass this.

### How can I create a Shop selling stacks?

> To create such a shop, follow these steps:
>
> 1. Set "allow-stacks" to true in the config.yml and reload the plugin.
> 2. Give the player (Yourself) the permission quickshop.create.stacks
> 3. Hold the number of items to buy/sell and create the shop as normal.

### Can I create a shop that bypasses the default vanilla stack-size?

> Yes. Enable the custom-item-stacksize option in the config.yml and reload the plugin. After that, you can use "/quickshop stack"

### My shop was broken/denied by XXX non-protection plugin. Why?

> QuickShop creates a fake BlockBreakEvent to check if you can build in that area. Some plugins may interfere with this event by canceling it. Try Use [protection listener filter](../modules/shops/protection-checker#resolve-the-plugin-conflicting) to fix it.

### How can I migrate from H2 to MySQL, MariaDB (or vice-versa)?

> [See Docs](../modules/datasource#migrate)

### The plugin is giving a NoClassDefFoundError/NoSuchMethodError in the console, why?

> This may be caused either by odd plugins that QuickShop does (not) support or by having a damaged/corrupted jar of QuickShop. Try to update the plugin and also test it with ONLY QuickShop installed. If the issue persists, report it to us on GitHub!

### How can I change or delete some messages?  

> [Override the OTA translation](../modules/localization#override-the-ota-translation)

### Can you add support for X?  

> Maybe. Please open an issue on our GitHub for this.

### It cannot load on 1.7–1.19

> See "Tested Minecraft Versions", latest version only supports 1.20 and above.

### Any Known Incompatibilities?

> Some plugins may not work correctly alongside QuickShop, and unfortunately there is often little we can do on our side to resolve these conflicts.

#### BungeeCord Chat Plugins

> Most BungeeCord chat plugins are known to be incompatible with QuickShop.  
> To resolve these conflicts, download and install the [Compat-BungeeCord](../compat-modules/bungeecord) compatibility module from the releases page.  

#### Hybrid Server Software

> Hybrid servers (such as Mohist, Arclight, Magma, and CatServer) are not fully supported by QuickShop-Hikari.  
> Some features may not function correctly on these server implementations and could result in errors or unexpected behavior. If you choose to run  QuickShop-Hikari on a Hybrid server, you do so at your own risk and are responsible for any issues that may arise.  

### How can I support the project?

> You can support QuickShop-Hikari via [GitHub Sponsors](https://github.com/sponsors/creatorfromhell) or [YuanYuan’s Afdian](https://afdian.com/a/yuanyuanowo)
