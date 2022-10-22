import styled from 'styled-components';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSize.m};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${getRandomHexColor};
  width: 100%;
  padding: ${p => p.theme.space[3]}px 0;
`;

export const StatName = styled.p`
  font-size: ${p => p.theme.fontSize.s};
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const Percentage = styled.p`
  font-size: ${p => p.theme.fontSize.m};
  font-weight: ${p => p.theme.fontWeight.bold};
`;
