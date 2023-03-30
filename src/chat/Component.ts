export enum ComponentType {
  UNKNOWN = 0,
  ACTION_ROW = 1,
  BUTTON = 2,
  SELECT = 3,
  USER_SELECT = 5,
  ROLE_SELECT = 6,
  MENTIONABLE_SELECT = 7,
  CHANNEL_SELECT = 8,
}

export interface UnknownComponent {
  type: ComponentType.UNKNOWN;
  indices: number[];
}

export interface ActionRowComponent {
  type: ComponentType.ACTION_ROW;
  indices: number[];
  errorText?: string;
  components: Component[];
}

export enum ButtonStyle {
  UNKNOWN = 0,
  PRIMARY = 1,
  SECONDARY = 2,
  SUCCESS = 3,
  DANGER = 4,
  LINK = 5,
}

export interface ComponentEmoji {
  id?: string;
  name: string;
  src?: string;
  animated?: boolean;
  surrogates?: string;
}

export enum ActionComponentState {
  UNKNOWN = -1,
  NORMAL = 0,
  LOADING = 1,
  DISABLED = 2,
}

export interface ButtonComponent {
  type: ComponentType.BUTTON;
  indices: number[];
  applicationId: string;
  customId?: string;
  label?: string;
  style: ButtonStyle;
  disabled?: boolean;
  emoji?: ComponentEmoji;
  url?: string;
  state: ActionComponentState;
}

export interface StringSelectItem {
  label: string;
  value: string;
  emoji?: ComponentEmoji;
  description?: string;
  default?: boolean;
}

export interface StringSelectComponent {
  type: ComponentType.SELECT;
  indices: number[];
  applicationId: string;
  customId: string;
  placeholder?: string;
  accessibilityLabel?: string;
  minValues: number;
  maxValues: number;
  disabled?: boolean;
  state: ActionComponentState;
  options?: StringSelectItem[];
  selectedOptions?: number[];
}

export enum SelectOptionType {
  UNKNOWN = 0,
  STRING = 1,
  USER = 2,
  ROLE = 3,
  CHANNEL = 4,
}

export interface SearchableSelectItem {
  label: string;
  value: string;
  emoji?: ComponentEmoji;
  type: number;
  iconSrc?: string;
  iconColor?: number;
}

export interface UserSelectComponent {
  type: ComponentType.USER_SELECT;
  indices: number[];
  selectedOptions?: SearchableSelectItem[];
  applicationId: string;
  customId: string;
  placeholder?: string;
  accessibilityLabel?: string;
  minValues: number;
  maxValues: number;
  disabled?: boolean;
  state: ActionComponentState;
}

export interface RoleSelectComponent {
  type: ComponentType.ROLE_SELECT;
  indices: number[];
  selectedOptions?: SearchableSelectItem[];
  applicationId: string;
  customId: string;
  placeholder?: string;
  accessibilityLabel?: string;
  minValues: number;
  maxValues: number;
  disabled?: boolean;
  state: ActionComponentState;
}

export interface MentionableSelectComponent {
  type: ComponentType.MENTIONABLE_SELECT;
  indices: number[];
  selectedOptions?: SearchableSelectItem[];
  applicationId: string;
  customId: string;
  placeholder?: string;
  accessibilityLabel?: string;
  minValues: number;
  maxValues: number;
  disabled?: boolean;
  state: ActionComponentState;
}

export interface ChannelSelectComponent {
  type: ComponentType.CHANNEL_SELECT;
  indices: number[];
  selectedOptions?: SearchableSelectItem[];
  applicationId: string;
  customId: string;
  placeholder?: string;
  accessibilityLabel?: string;
  minValues: number;
  maxValues: number;
  disabled?: boolean;
  state: ActionComponentState;
}


export type Component =
  | UnknownComponent
  | ActionRowComponent
  | ButtonComponent
  | StringSelectComponent
  | UserSelectComponent
  | RoleSelectComponent
  | MentionableSelectComponent
  | ChannelSelectComponent;
