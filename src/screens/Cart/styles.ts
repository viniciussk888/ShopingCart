import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #eee;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px;
  background: #eee;
`;

export const ContainerProducts = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
`;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
`;
export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDelete = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductTable = styled.View``;

export const TotalContainer = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const TotalText = styled.Text`
  text-align: center;
  color: #999;
  font-weight: bold;
`;
export const TotalAmount = styled.Text`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: bold;
`;
export const Order = styled.TouchableOpacity`
  background: #454777;
  padding: 12px;
  border-radius: 20px;
`;

export const OrderText = styled.Text`
  color: #ffbb00;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;

export const EmptyContainer = styled.View`
  margin-top: 50px;
  align-items: center;
  justify-content: flex-end;
  height: 380px;
  width: 380px;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  color: #454777;
`;
