import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

// sempre que for estilizar um componente "ex: RectButton" tem que por entre parenteses
export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #ff9000;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
  font-size: 18px;
`;
