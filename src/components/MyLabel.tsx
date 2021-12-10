import './MyLabel.css';

export interface MyLabelProps {
  /**
   * The content for the label.
   */
  label: string;
  /**
   * Size to the label.
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Color to the content of label.
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Capitalize letters.
   */
  allCaps?: boolean;
  /**
   * Custom color for the label font.
   */
  customFontColor?: string;
}

export const MyLabel = ({
  label = 'No Label',
  size = 'normal',
  color = 'primary',
  allCaps = false,
  customFontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: customFontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
