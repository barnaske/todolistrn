import { SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native'
import Header from '../../components/Header';
import {styles} from './styles'
import Input from '../../components/Input';
import {Add} from '../../components/Add';
import { ClipboardText } from 'phosphor-react-native';
import { useState } from 'react';
import Task from '../../components/Task';

export default function Home(){
  const [tasks, setTasks] = useState([
    {
      id: '1',
      content: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
      isDone: true
    },
    {
      id: '2',
      content: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
      isDone: false
    }
  ])

  const [tasksCounter, setTasksCounter] = useState(() => {
    return tasks.length
  })

  function tasksAreEmpty() {
    if (tasksCounter == 0) {
      return true
    } else {
      return false
    }
  }

  function handleOnMarkAsDone(id: string) {
    console.log('handleOnMarkAsDone')
  }

  function handleOnDeleteTask(id: string) {
    console.log('handleOnDeleteTask')
  }

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

                  {
                    tasksAreEmpty() ?
                    
                    <View style={styles.emptyTaskList}>
                      <Image source={require('../../../assets/Clipboard.png')}/>
                      <Text style={styles.emptyText}>Você ainda não tem tarefas cadastradas. Crie tarefas e organize seus itens a fazer</Text>
                    </View>

                    :
                    <View style={styles.tasksFilled}>
                      {                      
                        tasks.map((task) => 
                          <Task
                            key={task.id} 
                            id={task.id}
                            content={task.content}
                            isDone={task.isDone}
                            onMarkAsDone={handleOnMarkAsDone}
                            onDeleteTask={handleOnDeleteTask}
                          />
                        )
                      }
                    </View>

                  }
              </View>

            </View>

          </View>
        </>
    );
}