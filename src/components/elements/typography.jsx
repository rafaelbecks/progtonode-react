import styled from 'styled-components';
import theme from '../../themes';

const Title = styled.h1`
  color: ${theme.primaryColor};
  font-size: 16px;
`;

const Subtitle = styled.h2`
  color: ${theme.secondaryColor};
  font-size: 14px;
`;

const Paragraph = styled.p`
  color: ${theme.textColor};
  font-size: 12px;
`;

export { Title, Subtitle, Paragraph };
