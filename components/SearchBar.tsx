import { icons } from '@/constants/icons';
import { View, Text, Image, TextInput } from 'react-native';

const SearchBar = ({
  onPress,
  placeholder,
}: {
  onPress: () => void;
  placeholder: string;
}) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Image
        source={icons.search}
        className='size-5'
        resizeMode='contain'
        tintColor='#ab8bff'
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor='#ab8bff'
        className='ml-2 flex-1 text-white'
        onChangeText={() => {}}
        value=''
        onPress={onPress}
      />
    </View>
  );
};

export default SearchBar;
