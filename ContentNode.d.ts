interface BlockQuoteContentNode {
  type: "blockQuote";
  content: ContentNode[];
}

interface BulletListContentNode {
  type: "list";
  start?: number;
  ordered?: boolean;
  items: ContentNode[][];
}

declare enum ChannelType {
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

interface ChannelMentionContentNode {
  type: "channelMention";
  channelId: string;
  guildId?: string;
  messageId?: string;
  originalLink?: string;
  inContent?: ContentNode[];
  content: ContentNode[];
}

interface ChannelNameContentNode {
  type: "channel";
  channelId: string;
  guildId?: string;
  channelType?: ChannelType;
  content: ContentNode[];
}

interface CodeBlockContentNode {
  type: "codeBlock";
  lang: string;
  content: string;
  inQuote: boolean;
}

interface CommandMentionContentNode {
  type: "commandMention";
  channelId: string;
  commandId: string;
  commandName: string;
  commandKey: string;
  content: ContentNode[];
}

interface CustomEmojiContentNode {
  type: "customEmoji";
  id: number;
  alt: string;
  src: string;
  frozenSrc: string;
  jumboable?: boolean;
}

interface EmphasisContentNode {
  type: "em";
  content: ContentNode[];
}

interface GuildNameContentNode {
  type: "guild";
  content: string;
  guildId: string;
  icon: string;
}

interface HeadingContentNode {
  type: "heading";
  content: ContentNode[];
  level: number;
}

interface InlineCodeContentNode {
  type: "inlineCode";
  content: string;
}

interface LineBreakContentNode {
  type: "br";
}

interface LinkContentNode {
  type: "link";
  content: ContentNode[];
  target: string;
  // context?: LinkContext;
  // isUrl?: boolean;
  // textContent?: string;
}

interface ParagraphContentNode {
  type: "paragraph";
  content: ContentNode[];
}

interface SpoilerContentNode {
  type: "spoiler";
  content: ContentNode[];
  spoilerOrNull?: string;
}

declare enum StaticChannelMentionType {
  Home = "home",
  Customize = "customize",
  Browse = "browse",
  Unknown = "",
}

interface StaticChannelMentionContentNode {
  type: "staticRouteLink";
  channelId: StaticChannelMentionType;
  guildId?: number;
  content: ContentNode[];
}

interface StrikethroughContentNode {
  type: "s";
  content: ContentNode[];
}

interface StrongContentNode {
  type: "strong";
  content: ContentNode[];
}

interface TextContentNode {
  type: "text";
  content: string;
}

interface TimestampContentNode {
  type: "timestamp";
  timestamp: number;
  full: string;
  formatted: string;
}

interface UnderlineContentNode {
  type: "u";
  content: ContentNode[];
}

interface UnicodeEmojiContentNode {
  type: "emoji";
  content: string;
  surrogate: string;
  jumboable?: boolean;
}

interface UserOrRoleMentionContentNode {
  type: "mention";
  channelId: string;
  userId?: string;
  roleColor?: number;
  guildId?: string;
  roleId?: string;
  content: ContentNode[];
}

type ContentNode =
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
