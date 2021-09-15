import React from 'react';
import { Text, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';

import { Feather } from '@expo/vector-icons';
import bagError from '../../utils/bagError.json';

import {
  Container,
  HeaderContainer,
  ContainerProducts,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  EmptyContainer,
  EmptyText,
} from './styles';

import {useCart} from '../../context/Cart'

const Cart: React.FC = () => {
  const {totalValue, cart,remove} = useCart()

  return(
    <Container>
    <HeaderContainer>
      <Text>Carrinho</Text>
    </HeaderContainer>

    {cart.length ? (
      <>
      <ScrollView>
        <ContainerProducts>
          {cart.map((product,index) => (
            <Product key={product.id}>
              <ProductInfo>
                <ProductImage source={{ uri: product.image }} />
                <ProductDetails>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductPrice>R$ {product.price}</ProductPrice>
                </ProductDetails>
                <ProductDelete onPress={() => remove(index)}>
                  <Feather name="trash-2" size={20} color="#454777" />
                </ProductDelete>
              </ProductInfo>
            </Product>
          ))}
        </ContainerProducts>
        </ ScrollView>
        <TotalContainer>
          <TotalText>TOTAL</TotalText>
          <TotalAmount>R$ {totalValue.toFixed(2)}</TotalAmount>
          <Order>
            <OrderText>FINALIZAR PEDIDO</OrderText>
          </Order>
        </TotalContainer>
      </>
    ) : (
      <EmptyContainer>
        <LottieView source={bagError} resizeMode="contain" autoPlay loop />
        <EmptyText>Seu carrinho está vazio.</EmptyText>
      </EmptyContainer>
    )}
  </Container>
  );
}

export default Cart;