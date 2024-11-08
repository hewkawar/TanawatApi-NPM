function DiscordUser(userId: string) {
  return `/discord/users/${userId}`;
}

function Spotify() {
  return `/spotify`;
}

export const Routes = {
  DiscordUser,
  Spotify
};