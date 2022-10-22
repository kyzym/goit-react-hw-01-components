import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;

  align-items: center;

  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.backgroundCard};
  box-shadow: ${p => p.theme.shadows.small};
  width: 100%;
  height: 70px;
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin-left: 70px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p =>
    p.children
      ? p.theme.colors.statusCode.green
      : p.theme.colors.statusCode.red};
`;

export const FriendImg = styled.img`
  margin-left: 5px;
  width: 48px;
`;

export const FriendName = styled.p`
  margin-left: 20px;
  font-size: ${p => p.theme.fontSize.m};
  font-weight: ${p => p.theme.fontWeight.medium};
`;
