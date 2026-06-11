# Frequently Asked Questions


### Can I create a shop that sells AND buys items?

A: No. Each shop can only sell or buy but not both at once. You can however use a double-chest to have two shops. One buying and one selling the item.

### Can I use item currency like diamonds?  

A: No. We won't add it. But you can choose some economy plugins that allows you to use item currency.

### The plugin doesn't respond when creating a shop. Is it broken?  
A: Some plugins may cancel the Shop-creation. Most commonly is this the case with protection plugins. You can disable the shop.protection-checking in the config to bypass this.

### How can I create a Shop selling stacks?  
A: To create such a shop, follow these steps:

1. Set "allow-stacks" to true in the config.yml and reload the plugin.
2. Give the player (Yourself) the permission quickshop.create.stacks
3. Hold the number of items to buy/sell and create the shop as normal.

### Can I create a shop that bypasses the default vanilla stack-size? 

A: Yes. Enable the custom-item-stacksize option in the config.yml and reload the plugin. Afterward, can you use /quickshop stack

### My shop was broken/denied by XXX non-protection plugin. Why? 

A: QuickShop creates a fake BlockBreakEvent to check if you can build in that area. Some plugins may interfere with this event by canceling it. Try Use [protection listener filter](../modules/shops/protection-checker#resolve-the-plugin-conflicting) to fix it.

### How can I migrate from H2 to MySQL, MariaDB (or vice-versa)?

A: [See Docs](../modules/datasource#migrate)

### The plugin is giving a NoDefClassFound/NoMethodFound error in the console, why?

A: This may be caused either by odd plugins that QuickShop does (not) support or by having a damaged/corrupted jar of QuickShop. Try to update the plugin and also test it with ONLY QuickShop installed. If the issue persists, report it to us on GitHub!

### How can I change or delete some messages?  

A: [Override the OTA translation](../modules/localization#override-the-ota-translation)

### Can you add support for plugin X?  
A: Maybe. Please open an issue on our GitHub for this.

### It cannot load on 1.7/1.8/1.9/1.10/1.11/1.12/1.13/1.14/1.15/1.16/1.17/1.18/1.19.  
A: See "Tested Minecraft Versions", latest version only supports 1.20 and above.