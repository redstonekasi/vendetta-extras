import { Row, RowType } from "../chat/Row";

export interface GenerateOptions {
  type: RowType;
  // not sure about these yet
  // roleStyle: "username" | string; // TODO: Check for possible values
  // message: unknown; // TODO: Type JS Message
  // canAddNewReactions: boolean;
  // addNewReactionAccessibilityLabel: string;
  // reactionsTheme: unknown;
  // scrollTo: boolean;
  // jumped: boolean;
  // focused: boolean;
}

export interface ChannelOptions {
  renderEmbeds: boolean;
  renderReactions: boolean;
  inlineEmbedMedia: boolean;
  inlineAttachmentMedia: boolean;
  constrainedWidth: number;
  ignoreMentioned: boolean;
  animateEmoji: boolean;
  animatingStickerMessageId: boolean;
  gifAutoPlay: boolean;
  currentUserCommunicationDisabled: boolean;
  renderInvite: boolean;
  renderGiftCode: boolean;
  renderActivityInviteEmbed: boolean;
  renderThreadEmbeds: boolean;
  renderReplies: boolean;
  renderCommunicationDisabled: boolean;
  renderAttachments: boolean;
  renderDecoration: boolean;
  forcedTheme: unknown;
  ignoreEmbedDescriptionCache: boolean;
  forceHideSimpleEmbedContent: boolean;
  enableSwipeToReply: boolean;
}

export interface RowManager {
  generate: (options: GenerateOptions) => Row;
  setOptions: (options: ChannelOptions) => void;
}
