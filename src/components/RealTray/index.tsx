import React, {useState} from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import Reel from '../Reel';
import {videos} from '../../utils';

const RealTray = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({index}: {index: number}) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={videos}
      renderItem={({item, index}) => (
        <Reel item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item, index) => `${index}`}
    />
  );
};

export default RealTray;
