import { Component } from "./Component";
import { Embed } from "./Embed";
import { InviteEmbed } from "./InviteEmbed";
import { AnnotatedStructurableText, StructurableText } from "./StructurableText";

export interface ErrorMessage {
  id: string;
  stackTrace: string;
}

export enum MessageType {
  DEFAULT = 0,
  RECIPIENT_ADD = 1,
  RECIPIENT_REMOVE = 2,
  CALL = 3,
  CHANNEL_NAME_CHANGE = 4,
  CHANNEL_ICON_CHANGE = 5,
  CHANNEL_PINNED_MESSAGE = 6,
  USER_JOIN = 7,
  USER_PREMIUM_GUILD_SUBSCRIPTION = 8,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1 = 9,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2 = 10,
  USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3 = 11,
  CHANNEL_FOLLOW_ADD = 12,
  GUILD_STREAM = 13,
  GUILD_DISCOVERY_DISQUALIFIED = 14,
  GUILD_DISCOVERY_REQUALIFIED = 15,
  GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING = 16,
  GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING = 17,
  THREAD_CREATED = 18,
  REPLY = 19,
  CHAT_INPUT_COMMAND = 20,
  THREAD_STARTER_MESSAGE = 21,
  GUILD_INVITE_REMINDER = 22,
  CONTEXT_MENU_COMMAND = 23,
  AUTO_MODERATION_ACTION = 24,
  ROLE_SUBSCRIPTION_PURCHASE = 25,
  INTERACTION_PREMIUM_UPSELL = 26,
  STAGE_START = 27,
  STAGE_END = 28,
  STAGE_SPEAKER = 29,
  STAGE_RAISE_HAND = 30,
  STAGE_TOPIC = 31,
  GUILD_APPLICATION_PREMIUM_SUBSCRIPTION = 32,
  PRIVATE_CHANNEL_INTEGRATION_ADDED = 33,
  PRIVATE_CHANNEL_INTEGRATION_REMOVED = 34,
  PREMIUM_REFERRAL = 35,
}

export enum MessageState {
  Sent = "SENT",
  Sending = "SENDING",
  SendFailed = "SEND_FAILED",
  Unknown = "UNKNOWN",
}

export interface Attachment {
  url: string;
  videoUrl?: string;
  filename: string;
  size: string;
  width?: number;
  height?: number;
  isSpoiler: boolean;
  spoiler?: string;
  description?: string;
  hint?: string;
  role?: string;
  showDescription?: boolean;
  progress?: number;
  uploaderId?: string;
  uploaderItemId?: string;
  durationSecs?: unknown;
  waveform?: string;
  isAnimated?: boolean;
  waveformByteArray?: unknown;
  spoilerOrNull?: string;
  proxyWidth?: number;
  proxyHeight?: number;
}

export interface UploadProgress {
  headerText: string;
  headerColor: number;
  backgroundColor: number;
  progress: number;
  fileId: string;
  fileType: string;
  progressTrackColor: number;
  progressStartColor: number;
  progressEndColor: number;
  iconTintColor: number;
  closeTintColor: number;
}

export interface MessageReactionEmoji {
  name?: string;
  src: string;
  displayName: string;
  id?: string;
  animated?: boolean;
}

export interface BurstReactionColorPalette {
  backgroundColor: string;
  accentColor: string;
  highlightColor: string;
  opacity: number;
}

export interface ThemedBurstReactionColorPalette {
  LIGHT: BurstReactionColorPalette;
  DARK: BurstReactionColorPalette;
}

export interface MessageReaction {
  count: number;
  me: boolean;
  me_burst?: boolean;
  emoji: MessageReactionEmoji;
  burst_count?: number;
  burst_me?: boolean;
  themedBurstColors?: ThemedBurstReactionColorPalette;
  isMe?: unknown;
}

export enum StickerFormatType {
  PNG = 1,
  APNG = 2,
  LOTTIE = 3,
  GIF = 4,
}

export interface Sticker {
  id: string;
  format_type: StickerFormatType;
  name: string;
  asset: string;
  url: string;
  width?: number;
  height?: number;
  renderMode: number;
}

export interface RoleIcon {
  source?: string;
  unicodeEmoji?: string;
  name: string;
  size: number;
  alt: string;
}

export interface ConnectionsRoleTag {
  id: string;
  name: string;
  backgroundColor: number;
  iconColor: number;
}

export interface ThreadEmbedMessage {
  message: Message;
}

export interface ThreadEmbed {
  title: string;
  messageCountLabel: string;
  messagePreviewString?: string;
  archived?: boolean;
  archivedIconUrl?: string;
  referencedMessage?: ThreadEmbedMessage;
}

export enum ReferencedMessageState {
  LOADED = 0,
  SYSTEM = 1,
}

export interface LoadedReferencedMessage {
  state: ReferencedMessageState.LOADED;
  message: Message;
  systemContent: string;
}

export interface SystemReferencedMessage {
  state: ReferencedMessageState.SYSTEM;
  content: string;
}

export type ReferencedMessage = LoadedReferencedMessage | SystemReferencedMessage;

export interface ExecutedCommand {
  userId: string;
  usernameColor: number;
  avatarURL?: string;
  content: AnnotatedStructurableText;
}

export interface EphemeralIndication {
  content: StructurableText;
  helpArticleLink: string;
  helpButtonAccessibilityLabel: string;
}

export interface SurveyIndication {
  content: StructurableText;
  feedbackIconUrl: string;
}

export enum InteractionStatusViewState {
  UNKNOWN = -1,
  LOADING = 0,
  FAILED = 1,
}

export interface InteractionStatus {
  state: InteractionStatusViewState;
  text: StructurableText;
}

export interface ActivityInviteEmbed {
  coverImage?: string;
  isListening: boolean;
  headerText: string;
  partyStatus: string;
  avatarsToRender?: string[];
  maxPartySize: number;
  name?: string;
  subtext?: string;
  joinable: boolean;
  ctaText: string;
}

export interface ForumPostActions {
  numDisplayedReactions: number;
  isFollowing: boolean;
  followIcon: string;
  followLabel: string;
  shareIcon: string;
  shareLabel: string;
  defaultReaction?: MessageReaction;
}

export interface FlaggedMessageEmbed {
  id: string;
  channelId: string;
  guildId?: string;
  userId?: string;
  content?: StructurableText;
  channelName?: string;
  username?: string;
  usernameColor: number;
  roleColor?: string;
  shouldShowRoleDot: boolean;
  avatarURL?: string;
  communicationDisabled?: boolean;
}

export interface AutoModerationContext {
  headerText: string;
  headerBadgeText: string;
  ruleDisplayText?: string;
  keywordDisplayText?: string;
  actionsIconURL?: string;
  actionsText: string;
  feedbackText: string;
  message: FlaggedMessageEmbed;
}

export interface GiftEmbedResolving {
  headerText: string;
  headerColor: number;
  backgroundColor: number;
  thumbnailCornerRadius: number;
  resolvingGradientStart: number;
  resolvingGradientEnd: number;
}

export interface GiftEmbedInvalid {
  headerText: string;
  headerColor: number;
  backgroundColor: number;
  thumbnailCornerRadius: number;
  thumbnailUrl: string;
  titleText: string;
  titleColor: number;
  subtitle: string;
  subtitleColor: number;
  thumbnailBackgroundColor: number;
}

export interface GiftEmbedValid {
  headerText: string;
  headerColor: number;
  backgroundColor: number;
  thumbnailCornerRadius: number;
  thumbnailUrl?: string;
  titleText?: string;
  titleColor: number;
  subtitle?: string;
  subtitleColor: number;
  bodyText?: string;
  bodyTextColor: number;
  acceptLabelText?: string;
  acceptLabelColor: number;
  acceptLabelBackgroundColor: number;
  splashUrl?: string;
  splashOpacity: number;
  canBeAccepted: boolean;
  giftCode: string;
}

type GiftEmbed = GiftEmbedResolving | GiftEmbedInvalid | GiftEmbedValid;

export interface Message {
  type: MessageType;
  id: string;
  nonce?: string;
  channelId: string;
  guildId?: string;
  state?: MessageState;
  authorId?: string;
  flags?: number;
  edited?: string;
  constrainedWidth?: number;
  timestamp?: string;
  username?: string;
  usernameColor?: number;
  roleColor?: number;
  shouldShowRoleDot?: boolean;
  shouldShowRoleOnName?: boolean;
  colorString?: number;
  avatarURL?: string;
  avatarDecorationURL?: string;
  embeds?: Embed[];
  attachments?: Attachment[];
  content?: StructurableText;
  progress?: UploadProgress[];
  reactions?: MessageReaction[];
  useSortedReactions?: boolean;
  invite?: InviteEmbed[];
  stickers?: Sticker[];
  roleIcon?: RoleIcon;
  connectionsRoleTag?: ConnectionsRoleTag;
  threadEmbed?: ThreadEmbed;
  mentioned: boolean;
  gifAutoPlay?: boolean;
  animateEmoji?: boolean;
  referencedMessage?: ReferencedMessage;
  executedCommand?: ExecutedCommand;
  components?: Component[];
  threadStarterMessageHeader?: string;
  communicationDisabled?: boolean;
  tagText?: string;
  tagVerified?: boolean;
  tagBackgroundColor?: number;
  opTagText?: string;
  ephemeralIndication?: EphemeralIndication;
  surveyIndication?: SurveyIndication;
  interactionStatus?: InteractionStatus;
  useAttachmentGridLayout?: boolean;
  useAttachmentUploadPreview?: boolean;
  isCurrentUserMessageAuthor?: boolean;
  title?: string;
  description?: string;
  avatarURLs?: string[];
  isCallActive?: boolean;
  missed?: boolean;
  rawMilliseconds?: string;
  sticker?: Sticker;
  stickerLabel?: string;
  buttonLabel?: string;
  showInviteToSpeakButton?: boolean;
  activityInviteEmbed?: ActivityInviteEmbed;
  isFirstForumPostMessage?: boolean;
  postActions?: ForumPostActions;
  autoModerationContext?: AutoModerationContext;
  giftCodes?: GiftEmbed[];
  referralTrialOffer?: GiftEmbed;
  totalMonthsSubscribed?: number;
  swipeToReplyIconUrl?: string;
}

export type MessageBase = ErrorMessage | Message;
