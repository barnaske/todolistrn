import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Header from '../../components/Header';
import {styles} from './styles'
import Input from '../../components/Input';
import {Add} from '../../components/Add';
import { ClipboardText } from 'phosphor-react-native';

export default function Home(){
    return(
        <>
          <View style={styles.container}>
            <Header />

              <View style={styles.formWrapper}>
                <View style={styles.newTaskForm}>
                  <Input />
                  <Add />
                </View>
              </View>
              
              <View style={styles.tasksWrapper}>
                <View style={styles.tasksContainer}>
                  <View style={styles.tasksCounter}>
                    
                    <View style={styles.createdContainer}>
                      <Text style={styles.createdText}>
                        Criadas 
                      </Text>
                      <View style={styles.createdCounter}>
                        <Text style={styles.createdCountText}>
                          0
                        </Text>
                      </View>
                    </View>

                    <View style={styles.doneContainer}>
                      <Text style={styles.doneText}>
                        Concluidas 
                      </Text>
                      <View style={styles.doneCounter}>
                        <Text style={styles.doneCountText}>
                          0
                        </Text>
                      </View>
                    </View>
                  </View>
                  
                  <View style={styles.emptyTaskList}>
                    <ClipboardText size={56} color="#333" />
                    <Text style={styles.emptyText}>Você ainda não tem tarefas cadastradas. Crie tarefas e organize seus itens a fazer</Text>
                  </View>
              </View>

            </View>

          </View>
        </>
    );
}