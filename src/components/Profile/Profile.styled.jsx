import styled from 'styled-components';

export const AvatarImg = styled.img`
  width: 25%;
  border-radius: ${p => p.theme.radii.round};
  margin: 0 auto;
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontSize.l};
  font-weight: ${p => p.theme.fontWeight.bold};
`;

export const UserInfo = styled.p`
  font-size: ${p => p.theme.fontSize.s};
  color: ${p => p.theme.colors.grey};
  font-weight: ${p => p.theme.fontWeight.medium};
`;

export const UserLocation = styled(UserInfo)`
  font-size: ${p => p.theme.fontSize.m};
  padding: ${p => p.theme.space[2]}px 0;
`;

export const UserStat = styled.p`
  font-weight: ${p => p.theme.fontWeight.bold};
`;

export const UserStatItem = styled.li`
  width: ${100 / 3}%;
  padding: ${p => p.theme.space[3]}px 0;
  background-color: ${p => p.theme.colors.backgroundCard};

  &:nth-of-type(2) {
    border-left: ${p => p.theme.borders.small};
    border-right: ${p => p.theme.borders.small};
  }
`;
