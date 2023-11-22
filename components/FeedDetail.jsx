import { View, Text,Dimensions,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FeedDetail = ({data}) => {

    const navigation = useNavigation()
   const handleClick = () =>{
    navigation.navigate("Product",{_id:data._id});
   }

   const screenWidth = Math.round(Dimensions.get("window").width);
    const cardWidth = screenWidth / 2 -20
    // console.log(screenWidth)
    if(!data || !data.mainImage || !data.mainImage.asset || !data.mainImage.asset.url){
return (
    <View style={{ padding: 4, margin: 2, borderRadius: 10, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', width: cardWidth }}>
        <Text>No Image</Text>
      </View>
    );
  }

  // Extract mainImage and asset properties
  const { mainImage,title,description,price } = data;
  const { asset } = mainImage;
  const imageUrl = asset.url;

  return (
    <TouchableOpacity onPress={handleClick} className='p-4 m-2 rounded-xl bg-white items-center justify-center'
         style={{width: cardWidth}}>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} resizeMode='contain' className='w-32 h-52' />
      ) : (
        <Text>No Image</Text>
      )}
      <View className='flex items-center justify-start space-y-1 w-full'>
        <Text className='text-base font-semibold text-[#555]' >{title}</Text>
        <Text className='text-sm  text-[#777]' >{description}</Text>
      </View>
      <View className='flex-row items-center justify-between space-y-1 w-full'>
      <Text className='text-base font-semibold text-[#555]'>$ {price}</Text>
      <TouchableOpacity className='bg-black w-8 h-8 rounded-full flex items-center justify-center'>
        <AntDesign name='heart' size={16} color={"#fbfbfb"}/>
      </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default FeedDetail