import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background: #eee;
  padding: 40px;
`;

export const Input = styled.TextInput`
  background: #fff;
  padding: 10px;
  border-radius: 20px;
  margin: 0 10px 20px 10px;
`;

export const HeaderContainer = styled.View`
  justify-content: flex-start;
  padding: 20px;
  background: #eee;
`;

export const Button = styled.TouchableOpacity`
  background: #454777;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  border-radius: 4px;
`;
