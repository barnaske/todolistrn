import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Header from '../../components/Header';
import {styles} from './styles'
import Input from '../../components/Input';
import {Add} from '../../components/Add';

export default function Home(){
    return(
        <>
          <View style={styles.container}>
            <Header />
              <View style={styles.formContainer}>
                <View style={styles.form}>
                  <Input />
                  <Add />
                </View>
              </View>
          </View>
        </>
    );
}