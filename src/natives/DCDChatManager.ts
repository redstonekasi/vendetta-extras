export interface DCDChatManager {
  clearRows: (tag: number) => void;
  fadeIn: (tag: number) => void;
  greetCTAWillHide: () => void;
  greetCTAWillShow: () => void;
  scrollIntoView: (tag: number, pos: number, animated: boolean) => void;
  scrollTo: (tag: number, pos: number, animated: boolean) => void;
  scrollToBottom: (tag: number, animated: boolean) => void;
  scrollToRelativeOffset: (tag: number, animated: boolean) => void;
  scrollToTop: (tag: number, animated: boolean) => void;
  updateRows: (tag: number, rowsJSON: string, z10: boolean) => void;
  getConstants: unknown;
}
