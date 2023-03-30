import { MessageBase } from "./Message";

export enum ChangeType {
  NOOP = 0,
  INSERT = 1,
  UPDATE = 2,
  DELETE = 3,
}

export enum RowType {
  LoadingRow = 4,
  MessageRow = 1,
  SeparatorRow = 0,
  BlockedGroupRow = 2,
  UploadProgressRow = 3,
  EmbeddedActivityRow = 5,
}

export interface DeleteRow {
  changeType: ChangeType.DELETE;
  index: number;
}

export enum LoadingActionType {
  LOAD_MORE_BEFORE,
  LOAD_MORE_AFTER,
}

export interface LoadingAction {
  type: LoadingActionType;
  changeType: Exclude<ChangeType, ChangeType.DELETE>
}

export interface LoadMoreButton {
  action: LoadingAction;
  text: string;
  backgroundColor: number;
  color?: number;
}

export interface LoadingRow {
  type: RowType.LoadingRow;
  changeType: Exclude<ChangeType, ChangeType.DELETE>
  index: number;
  button: LoadMoreButton;
  isLoading: boolean;
}

export interface MessageRow {
  type: RowType.MessageRow;
  changeType: Exclude<ChangeType, ChangeType.DELETE>
  index: number;
  jumped?: boolean;
  highlightJumpedOnceOnly?: boolean;
  message: MessageBase;
  scrollTo?: boolean;
  animated?: boolean;
  canAddNewReactions?: boolean;
  addReactionLabel?: string;
  addNewReactionAccessibilityLabel?: string;
  reactionsTheme?: unknown;
  isHighlight?: boolean;
  renderContentOnly?: boolean;
  messageFrame?: unknown;
  reactTag?: number;
  truncation?: unknown;
  backgroundHighlight?: unknown;
  enableSwipeToReply?: boolean;
}

export interface SeparatorRow {
  type: RowType.SeparatorRow;
  changeType: Exclude<ChangeType, ChangeType.DELETE>
  index: number;
  text: string;
  id: string;
  color: number;
  scrollTo?: boolean;
}

export interface BlockedGroupButtonAction {
  type: string;
  context: string;
}

export interface BlockedGroupButton {
  action: BlockedGroupButtonAction;
}

export interface BlockedGroupContent {
  message: MessageBase;
}

export interface BlockedGroupRow {
  type: RowType.BlockedGroupRow;
  changeType: Exclude<ChangeType, ChangeType.DELETE>
  index: number;
  color: number;
  borderColor: number;
  backgroundColor: number;
  text: string;
  revealed: boolean;
  button: BlockedGroupButton;
  content?: BlockedGroupContent[];
}

export interface UploadProgressRow {
  type: RowType.UploadProgressRow;
  changeType: Exclude<ChangeType, ChangeType.DELETE>
  index: number;
  message: unknown;
  fileId: string;
}

export interface EmbeddedActivityRow {
  type: RowType.EmbeddedActivityRow;
  changeType: Exclude<ChangeType, ChangeType.DELETE>
  index: number;
  content: string;
  avatarUrls: string[];
  buttonText: string;
  embeddedActivityKey: string;
  dismissButtonAccessibilityLabel: string;
}

export type Row =
  | DeleteRow
  | LoadingRow
  | MessageRow
  | SeparatorRow
  | BlockedGroupRow
  | UploadProgressRow
  | EmbeddedActivityRow;
