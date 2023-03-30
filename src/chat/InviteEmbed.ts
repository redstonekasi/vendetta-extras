import { StructurableText } from "./StructurableText";

export enum GuildInviteExtendedType {
  STAGE_INSTANCE = 0,
  GUILD_SCHEDULED_EVENT = 1,
  GUILD_INVITE_DISABLED = 2,
}

export enum InviteType {
  GUILD = 0,
  GROUP_DM = 1,
  FRIEND = 2,
}

export interface GuildInviteEmbed {
  backgroundColor: number;
  borderColor: number;
  headerColor: number;
  headerText: string;
  type: InviteType;
  acceptLabelBackgroundColor?: number;
  acceptLabelBorderColor?: number;
  acceptLabelColor?: number;
  acceptLabelText?: string;
  bodyText?: string;
  bodyTextColor?: number;
  canBeAccepted?: boolean;
  channelIcon?: string;
  channelName?: string;
  embedCanBeTapped?: boolean;
  memberText?: string;
  onlineText?: string;
  resolvingGradientEnd?: number;
  resolvingGradientStart?: number;
  splashHasRadialGradient?: boolean;
  splashOpacity?: number;
  splashUrl?: string;
  inviteSplash?: string;
  subtitle?: string;
  subtitleColor?: number;
  thumbnailBackgroundColor?: number;
  thumbnailCornerRadius?: number;
  thumbnailText?: string;
  thumbnailUrl?: string;
  titleColor?: number;
  titleText?: string;
}

export interface GuildInviteDisabledEmbed {
  backgroundColor: number;
  borderColor: number;
  headerColor: number;
  headerText: string;
  type: InviteType;
  titleText: string;
  subtitle: string;
  helpCenterArticleLabel: string;
  helpCenterArticleURL: string;
  acceptLabelBackgroundColor?: number;
  acceptLabelBorderColor?: number;
  acceptLabelColor?: number;
  acceptLabelText?: string;
  bodyText?: string;
  bodyTextColor?: number;
  canBeAccepted?: boolean;
  channelIcon?: string;
  channelName?: string;
  embedCanBeTapped?: boolean;
  memberText?: string;
  onlineText?: string;
  resolvingGradientEnd?: number;
  resolvingGradientStart?: number;
  splashHasRadialGradient?: boolean;
  splashOpacity?: number;
  splashUrl?: string;
  inviteSplash?: string;
  subtitleColor?: number;
  thumbnailBackgroundColor?: number;
  thumbnailCornerRadius?: number;
  thumbnailText?: string;
  thumbnailUrl?: string;
  titleColor?: number;
  extendedType?: GuildInviteExtendedType.GUILD_INVITE_DISABLED; // Not sure if this is right
  guildName: string;
  guildIcon?: string;
  headerIcon?: string;
}

export interface GuildEventInviteEmbed {
  backgroundColor: number;
  borderColor: number;
  extendedType?: GuildInviteExtendedType.GUILD_SCHEDULED_EVENT; // Not sure if this is right
  headerColor: number;
  headerText: string;
  type: InviteType;
  acceptLabelBackgroundColor?: number;
  acceptLabelBorderColor?: number;
  acceptLabelColor?: number;
  acceptLabelIcon?: string;
  acceptLabelText?: string;
  badgeCount?: string;
  badgeIcon?: string;
  bodyText?: string;
  bodyTextColor?: number;
  canBeAccepted?: boolean;
  channelIcon?: string;
  channelName?: string;
  content?: StructurableText;
  creatorAvatar?: string;
  embedCanBeTapped?: boolean;
  guildIcon?: string;
  guildName?: string;
  headerIcon?: string;
  headerTextColor?: number;
  isRsvped?: boolean;
  memberText?: string;
  onlineText?: string;
  resolvingGradientEnd?: number;
  resolvingGradientStart?: number;
  secondaryActionIcon?: string;
  splashHasRadialGradient?: boolean;
  splashOpacity?: number;
  splashUrl?: string;
  inviteSplash?: string;
  subtitle?: string;
  subtitleColor?: number;
  thumbnailBackgroundColor?: number;
  thumbnailCornerRadius?: number;
  thumbnailText?: string;
  thumbnailUrl?: string;
  titleColor?: number;
  titleText?: string;
}

export type InviteEmbed =
  | GuildInviteEmbed
  | GuildInviteDisabledEmbed
  | GuildEventInviteEmbed;
