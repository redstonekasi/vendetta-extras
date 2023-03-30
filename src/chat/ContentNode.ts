export interface BlockQuoteContentNode {
  type: "blockQuote";
  content: ContentNode[];
}

export interface BulletListContentNode {
  type: "list";
  start?: number;
  ordered?: boolean;
  items: ContentNode[][];
}

export enum ChannelType {
  DM = 1,
  GROUP_DM = 3,
  GUILD_TEXT = 0,
  GUILD_VOICE = 2,
  GUILD_CATEGORY = 4,
  GUILD_ANNOUNCEMENT = 5,
  GUILD_STORE = 6,
  ANNOUNCEMENT_THREAD = 10,
  PUBLIC_THREAD = 11,
  PRIVATE_THREAD = 12,
  GUILD_STAGE_VOICE = 13,
  GUILD_DIRECTORY = 14,
  GUILD_FORUM = 15,
}

export interface ChannelMentionContentNode {
  type: "channelMention";
  channelId: string;
  guildId?: string;
  messageId?: string;
  originalLink?: string;
  inContent?: ContentNode[];
  content: ContentNode[];
}

export interface ChannelNameContentNode {
  type: "channel";
  channelId: string;
  guildId?: string;
  channelType?: ChannelType;
  content: ContentNode[];
}

export interface CodeBlockContentNode {
  type: "codeBlock";
  lang: string;
  content: string;
  inQuote: boolean;
}

export interface CommandMentionContentNode {
  type: "commandMention";
  channelId: string;
  commandId: string;
  commandName: string;
  commandKey: string;
  content: ContentNode[];
}

export interface CustomEmojiContentNode {
  type: "customEmoji";
  id: number;
  alt: string;
  src: string;
  frozenSrc: string;
  jumboable?: boolean;
}

export interface EmphasisContentNode {
  type: "em";
  content: ContentNode[];
}

export interface GuildNameContentNode {
  type: "guild";
  content: string;
  guildId: string;
  icon: string;
}

export interface HeadingContentNode {
  type: "heading";
  content: ContentNode[];
  level: number;
}

export interface InlineCodeContentNode {
  type: "inlineCode";
  content: string;
}

export interface LineBreakContentNode {
  type: "br";
}

export interface LinkContentNode {
  type: "link";
  content: ContentNode[];
  target: string;
  // context?: LinkContext;
  // isUrl?: boolean;
  // textContent?: string;
}

export interface ParagraphContentNode {
  type: "paragraph";
  content: ContentNode[];
}

export interface SpoilerContentNode {
  type: "spoiler";
  content: ContentNode[];
  spoilerOrNull?: string;
}

export enum StaticChannelMentionType {
  Home = "home",
  Customize = "customize",
  Browse = "browse",
  Unknown = "",
}

export interface StaticChannelMentionContentNode {
  type: "staticRouteLink";
  channelId: StaticChannelMentionType;
  guildId?: number;
  content: ContentNode[];
}

export interface StrikethroughContentNode {
  type: "s";
  content: ContentNode[];
}

export interface StrongContentNode {
  type: "strong";
  content: ContentNode[];
}

export interface TextContentNode {
  type: "text";
  content: string;
}

export interface TimestampContentNode {
  type: "timestamp";
  timestamp: number;
  full: string;
  formatted: string;
}

export interface UnderlineContentNode {
  type: "u";
  content: ContentNode[];
}

export interface UnicodeEmojiContentNode {
  type: "emoji";
  content: string;
  surrogate: string;
  jumboable?: boolean;
}

export interface UserOrRoleMentionContentNode {
  type: "mention";
  channelId: string;
  userId?: string;
  roleColor?: number;
  guildId?: string;
  roleId?: string;
  content: ContentNode[];
}

export type ContentNode =
  | BlockQuoteContentNode
  | BulletListContentNode
  | ChannelNameContentNode
  | ChannelMentionContentNode
  | CodeBlockContentNode
  | CommandMentionContentNode
  | CustomEmojiContentNode
  | EmphasisContentNode
  | GuildNameContentNode
  | HeadingContentNode
  | InlineCodeContentNode
  | LineBreakContentNode
  | LinkContentNode
  | ParagraphContentNode
  | SpoilerContentNode
  | StaticChannelMentionContentNode
  | StrikethroughContentNode
  | StrongContentNode
  | TextContentNode
  | TimestampContentNode
  | UnderlineContentNode
  | UnicodeEmojiContentNode
  | UserOrRoleMentionContentNode;
