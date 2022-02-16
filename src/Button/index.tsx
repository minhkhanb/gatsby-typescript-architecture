import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
// import { css } from '@emotion/react';

interface ButtonProps {
  className?: string;
}

const Button: React.FunctionComponent<ButtonProps> = styled(
  ({ className }: ButtonProps) => (
    <div className={`${className} bg-green-700`}>Styled component</div>
  )
)`
  font-weight: 600;
  ${tw`text-xl text-red-700`}
`;

export default Button;
