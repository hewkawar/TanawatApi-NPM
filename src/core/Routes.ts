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

export const Routes = {
  DiscordUser,
  Spotify
};