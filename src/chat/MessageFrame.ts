export enum MessageFrameType {
  UNKNOWN = -1,
  JUMP_MESSAGE_FRAME = 0,
  MEDIA_VIEWER_MESSAGE_FRAME = 1,
}

export interface UnknownMessageFrame {
  type: MessageFrameType.UNKNOWN;
}

export interface MessageFrameJump {
  type: MessageFrameType.JUMP_MESSAGE_FRAME;
  guildName?: string;
  channelName?: string;
}

export interface MessageFrameMediaViewer {
  type: MessageFrameType.MEDIA_VIEWER_MESSAGE_FRAME;
}


export type MessageFrame =
  | UnknownMessageFrame
  | MessageFrameJump
  | MessageFrameMediaViewer;
