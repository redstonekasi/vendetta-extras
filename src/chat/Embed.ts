import { StructurableText } from "./StructurableText";

export enum EmbedType {
  Article = "article",
  Image = "image",
  Video = "video",
  Tweet = "tweet",
  Link = "link",
  HTML = "html",
  File = "file",
  GIFV = "gifv",
  Rich = "rich",
  Text = "text",
  ApplicationNews = "application_news",
  Unknown = "unknown",
}

export interface EmbedAuthor {
  name: string;
  url?: string;
  iconURL?: string;
  iconProxyURL?: string;
}

export interface EmbedProvider {
  name: string;
}

export interface EmbedField {
  rawName?: string;
  rawValue?: string;
  name?: StructurableText;
  value?: StructurableText;
}

export interface EmbedMedia {
  url: string;
  proxyURL?: string;
  width: number;
  height: number;
  embedUrl?: string;
}

export interface EmbedThumbnail {
  url: string;
  proxyURL?: string;
  videoUrl?: string;
  height: number;
  width: number;
  gifv?: boolean;
  showPlayButton?: boolean;
  embedUrl?: string;
}

export interface EmbedFooter {
  iconURL?: string;
  iconProxyURL?: string;
  content?: string;
}

export enum EmbedFailureState {
  UNSPECIFIED = 0,
  UPLOAD_FAILED = 1,
  AUTO_MODERATION_BLOCKED_MESSAGE = 2,
}

export interface Embed {
  type: EmbedType;
  author?: EmbedAuthor;
  provider?: EmbedProvider;
  rawTitle?: string;
  title?: StructurableText;
  fields?: EmbedField[];
  url?: string;
  rawDescription?: string;
  description?: StructurableText;
  image?: EmbedMedia;
  images?: EmbedMedia[];
  video?: EmbedMedia;
  thumbnail?: EmbedThumbnail;
  numAttachments?: string;
  attachmentsSize?: string;
  messageSendError?: string;
  disableBackgroundColor?: boolean;
  footer?: EmbedFooter;
  spoiler?: string;
  iconURL?: string;
  failureState?: EmbedFailureState;
  providerColor?: number;
  borderLeftColor?: number;
  headerTextColor?: number;
  bodyTextColor: number;
  spoilerOrNull?: string;
}
