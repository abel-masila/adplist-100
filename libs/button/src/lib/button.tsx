import { StyledButton } from './styles';

/* eslint-disable-next-line */
export interface ButtonProps {
  title: string;
  htmlType?: string;
  onClick?: () => void;
  primary?: boolean;
}

export function Button({ title, onClick, primary }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} primary={primary}>
      {title}
    </StyledButton>
  );
}

export default Button;
