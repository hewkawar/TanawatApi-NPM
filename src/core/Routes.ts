/**
 * Generates a URL path for a Discord user.
 * 
 * @param userId - The unique identifier of the Discord user.
 * @returns The URL path for the specified Discord user.
 */
function DiscordUser(userId: string) {
  return `/discord/users/${userId}`;
}

/**
 * Generates a URL path for the Spotify API.
 * 
 * @returns The URL path for the Spotify API.
 */
function Spotify() {
  return `/spotify`;
}

/**
 * Generates a URL path for the HStudio store items.
 * 
 * @returns The URL path for the HStudio store items.
 */
function HStudioStoreItems(): string {
  return `/hstudio/store/items`;
}

/**
 * Generates a URL path for a specific HStudio store item. 
 * 
 * @param itemId - The unique identifier of the HStudio store item.
 * @returns The URL path for the specified HStudio store item.
 */
function HStudioStoreItem(itemId: string) {
  return `/hstudio/store/${itemId}`;
}

/**
 * Generates a URL path for buying a specific HStudio store item.
 * 
 * @param itemId - The unique identifier of the HStudio store item.
 * @returns The URL path for buying the specified HStudio store item.
 */
function HStudioStoreItemBuy(itemId: string) {
  return `/hstudio/store/${itemId}/buy`;
}

/**
 * Generates a URL path for the HStudio status.
 * 
 * @returns The URL path for the HStudio status.
 */
function HStudioStatus() {
  return `/hstudio/status`;
}

/**
 * Generates a URL path for the HStudio status of a specific node.
 * 
 * @returns The URL path for the HStudio status of a specific node.
 */
function HStudioStatusNode() {
  return `/hstudio/status/node`;
}

/**
 * Generates a URL path for the HStudio status of a specific node.
 * 
 * @param identifier - The unique identifier of the node.
 * @returns The URL path for the HStudio status of a specific node.
 */
function HStudioStatusNodeIdentifier(identifier: string) {
  return `/hstudio/status/node/${identifier}`;
}

/**
 * Generates a URL path for the HStudio status of all nodes.
 * 
 * @returns The URL path for the HStudio status of all nodes.
 */
function HStudioStatusNodes() {
  return `/hstudio/status/nodes`;
}

/**
 * Generates a URL path for the HStudio info.
 * 
 * @returns The URL path for the HStudio info.
 */
function HStudioInfo() {
  return `/hstudio/info`;
}

/**
 * Generates a URL path for the HStudio info of a specific node.
 * 
 * @returns The URL path for the HStudio info of a specific node.
 */
function HStudioInfoNode() {
  return `/hstudio/info/node`;
}

/**
 * Generates a URL path for the HStudio info of a specific node.
 * 
 * @param identifier - The unique identifier of the node.
 * @returns The URL path for the HStudio info of a specific node.
 */
function HStudioInfoNodeIdentifier(identifier: string) {
  return `/hstudio/info/node/${identifier}`;
}

/**
 * Generates a URL path for the HStudio info of all nodes.
 * 
 * @returns The URL path for the HStudio info of all nodes.
 */
function HStudioInfoNodes() {
  return `/hstudio/info/nodes`;
}

export const Routes = {
  DiscordUser,
  Spotify,
  HStudioStoreItems,
  HStudioStoreItem,
  HStudioStoreItemBuy,
  HStudioStatus,
  HStudioStatusNode,
  HStudioStatusNodeIdentifier,
  HStudioStatusNodes,
  HStudioInfo,
  HStudioInfoNode,
  HStudioInfoNodeIdentifier,
  HStudioInfoNodes,
};