import React, {useState,useCallback} from 'react';
import { FlatList, Text } from 'react-native';
import { Feather,SimpleLineIcons } from '@expo/vector-icons';
import {
  Container,
  InputSeach,
  HeaderContainer,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  PruductDescription,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';
import { useNavigation } from "@react-navigation/native";

import {productsList} from '../../mocks/products'

import {useCart} from '../../context/Cart'

type productsType = {
  id:string,
  name:string,
  price:number,
  image:string
}

export const Main: React.FC = () => {
  const navigation = useNavigation();
  const {add, cart} = useCart()
  const [filterName,setFilterName] = useState("");
  const [products,setProducts] = useState<productsType>(productsList);

  const navigateToLogin = useCallback(()=>{
    navigation.reset({
        routes: [{
          name: 'Login'
        }]
      })
  },[navigation])

  const filterProducts = useCallback(()=>{
    const filteredProducts = productsList.filter(x => x.name === filterName)
    if(filterName===""){
      return setProducts(productsList)
    }else if(filteredProducts.length===0){
      return alert('Nenhum produto encontado!')
    }
    setProducts(filteredProducts)
  },[filterName])

  const renderProduct = useCallback(({ item }) => {
    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <PruductDescription>
          <ProductTitle>{item.name}</ProductTitle>
          <ProductPrice>R$ {item.price}</ProductPrice>
        </PruductDescription>
        <AddButton onPress={() =>{}}>
          <ProductAmount>
            <Feather name="shopping-cart" color="#454777" size={20} />
            <ProductAmountText>{cart.filter(x => x.id === item.id).length}</ProductAmountText>
          </ProductAmount>
          <AddButtonText onPress={()=>add(item)}>ADICIONAR</AddButtonText>
        </AddButton>
      </Product>
    );
  },[cart]);

  return(
    <Container>
        <HeaderContainer>
          <Text>Shop frutas</Text>
          <SimpleLineIcons onPress={navigateToLogin} name="logout" color="#454777" size={20} />
        </HeaderContainer>

        <InputSeach onChangeText={(text) => setFilterName(text)} onBlur={filterProducts} placeholder="Buscar produtos" />

        <FlatList
          horizontal
          data={products}
          keyExtractor={(item:productsType) => String(item.id)}
          renderItem={renderProduct}
        />

      </Container>
  );
}