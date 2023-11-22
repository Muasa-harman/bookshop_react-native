import { View, Text, SafeAreaView,Image, TouchableOpacity,ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Screen3 } from '../assets';
import { TextInput } from 'react-native';
import { fetchFeeds } from '../sanity';
import { useDispatch, useSelector } from 'react-redux';
import { SET_FEEDS } from '../context/action/feedsAction';
import Feeds from '../components/Feeds';

const HomeScreen = () => {
  const feeds = useSelector((state) => state.feeds)
  const [filtered,setFiltered] = useState(null)

  const dispatch = useDispatch()

  const handleSearchItem = (text) =>{
    setSearchItem(text);

    console.log("Filter Data:", feeds?.feeds.filter(item => item.title.includes(text)))
  };
  useEffect(()=>{
    // const fetchData = async () => {
      setIsLoading(true);
   
    try {
      // const res = await
      fetchFeeds().then((res) =>{
        // console.log(res)
        dispatch(SET_FEEDS(res));
        // console.log("Feeds from Store : ",feeds?.feeds); //
        setInterval(()=>{
          setIsLoading(false);

        },2000);
     });
      
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }  
    //fetchData();
  },[dispatch])
  const [searchItem,setSearchItem] = useState("")
  const [isLoading,setIsLoading] = useState(false)
  return (
    <SafeAreaView className="flex-1 items-center justify-start bg-[#EBEAEF]">
      <View className='w-full flex-row items-center justify-between px-4 py-2 top-6'>
      <MaterialIcons name="chevron-left" size={32} color="#555"/>
      <Image source={Screen3} className='w-12 h-12 rounded-xl' resizeMode='cover'/>
      </View>
      {/* search box */}
      <View className='flex-row items-center justify-between px-4 py-2 w-full space-x-6'>
        <View className='px-4 py-2 bg-white rounded-xl flex-1 flex-row top-4 items-center justify-center space-x-2'>
          <MaterialIcons name='search' size={24} color='#7f7f7f'/>
          <TextInput className='text-base font-semibold text-[#555]
           flex-1 py-1 -mt-1' placeholder='search here...'
           value={searchItem} onChangeText={handleSearchItem}
           />
        </View>
        <TouchableOpacity className='w-14 h-12 rounded-xl flex top-4 items-center justify-center bg-white'>
          <FontAwesome name='filter' size={24} color="#7F7f7f"/>
        </TouchableOpacity>
      </View>

      {/* scrolable container */}
      <ScrollView className='flex-1 w-full top-3'>
        {isLoading ? (<View className='flex-1 h-80 items-center justify-center'><ActivityIndicator size='large' color="teal"/>
         </View>):(<Feeds feeds={filtered || filtered?.length > 0 ? filtered : feeds?.feeds }/>)}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen