import styled from 'styled-components';

export const TableHeadContent = styled.th`
  background-color: ${p => p.theme.colors.accent};
  height: 30px;
`;

export const TableRow = styled.tr`
  text-align: center;
  height: 30px;

  &:nth-of-type(2n) {
    background-color: ${p => p.theme.colors.backgroundCard};
  }
`;

export const TableRowType = styled.tr`
  display: flex;
  height: 30px;
  align-items: center;
  padding-left: 35%;
`;
