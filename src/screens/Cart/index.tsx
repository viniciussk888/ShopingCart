import React, { useEffect, useState } from "react";
import { Text, ScrollView } from "react-native";
import LottieView from "lottie-react-native";

import { Feather } from "@expo/vector-icons";
import bagError from "../../utils/bagError.json";
import { createAndSavePDF } from "../../utils/generatePDF";

import {
  Container,
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
} from "./styles";

import { useCart } from "../../context/Cart";

const Cart: React.FC = () => {
  const { totalValue, cart, remove } = useCart();
  const [products, setProducts] = useState("");

  useEffect(() => {
    let productsString = [];
    cart.map((product) => {
      productsString.push(
        "<p>" + product.name + "_____R$ " + product.price + "<p/>"
      );
    });
    setProducts(productsString.join(""));
  }, [cart]);

  const generatePDFfile = async () => {
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pdf Content</title>
        <style>
            body {
                font-size: 16px;
                color: rgb(255, 196, 0);
            }

            h1 {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1>COMPROVANTE DE COMPRA!</h1>
        <br/>
        ${products}
        <br/>
        <h5>TOTAL: R$ ${totalValue.toFixed(2)}</h5>
    </body>
    </html>
`;
    createAndSavePDF(htmlContent);
  };

  return (
    <Container>
      {cart.length ? (
        <>
          <ScrollView>
            <ContainerProducts>
              {cart.map((product, index) => (
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
          </ScrollView>
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalAmount>R$ {totalValue.toFixed(2)}</TotalAmount>
            <Order onPress={generatePDFfile}>
              <OrderText>CHECKOUT</OrderText>
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
};

export default Cart;
