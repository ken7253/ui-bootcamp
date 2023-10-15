/**
 * ========================================
 * !     THIS IS COMPONENT SPEC FILE
 * !           DO NOT EDIT
 * ========================================
 */
export type Props = {
  /** ラベルテキスト */
  children?: string;
  /** デフォルトのチェック状態 */
  defaultCheck?: boolean;
  /** スイッチを切り替えた場合に実行される関数 */
  onToggle?: (check: boolean) => void;
};
