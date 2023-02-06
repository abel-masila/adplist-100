import { StyledButton } from './styles';

/* eslint-disable-next-line */
export interface ButtonProps {
  title: string;
  htmlType?: string;
  onClick?: () => void;
  primary?: boolean;
  isLink?: boolean;
}

export function Button({ title, onClick, primary, isLink }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} primary={primary} isLink={isLink}>
      {title}
    </StyledButton>
  );
}

export default Button;
