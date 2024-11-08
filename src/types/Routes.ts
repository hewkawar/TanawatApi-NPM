export interface DiscordUserStatus {
    user: DiscordUser,
    presence: DiscordPresence,
    activities: DiscordActivity[],
}

export interface DiscordUser {
    id: string,
    bot: boolean,
    system: boolean,
    flags: number,
    username: string,
    globalName: string | null,
    discriminator: string | null,
    avatar: string | null,
    avatarDecoration: string | null,
    avatarDecorationData: string | null,
    createdTimestamp: number,
    defaultAvatarURL: string,
    tag: string,
    avatarURL: string,
    displayAvatarURL: string,
}

export type DiscordPresence = "online" | "idle" | "dnd" | "offline";

export interface DiscordActivity {
    name: string,
    type: number,
    url: string | null,
    details: string | null,
    state: string | null,
    applicationId: string | null,
    timestamps: DiscordActivityTimestamps | null,
    party: DiscordActivityParty | null,
    syncId: string | null,
    assets: DiscordActivityAssets | null,
    flags: number,
    emoji: string | null,
    buttons: string | null,
    createdTimestamp: number,
}

export interface DiscordActivityTimestamps {
    start: number,
    end: number
}

export interface DiscordActivityParty {
    id: string,
    size: [number, number]
}

export interface DiscordActivityAssets {
    largeImage: string | null,
    largeText: string | null,
    smallImage: string | null,
    smallText: string | null
}