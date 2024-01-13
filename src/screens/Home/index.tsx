import { SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native'
import Header from '../../components/Header';
import {styles} from './styles'
import Input from '../../components/Input';
import {Add} from '../../components/Add';
import { ClipboardText } from 'phosphor-react-native';
import { FormEvent, useId, useState } from 'react';
import Task from '../../components/Task';
import * as Crypto from 'expo-crypto';


export default function Home(){
  const [taskContent, setTaskContent] = useState('')

  const [tasks, setTasks] = useState([

  ])

  const [tasksCounter, setTasksCounter] = useState(() => {
    return tasks.length
  })

  const [doneTasks, setDoneTasks] = useState(() => {
    let alreadyDone = tasks.filter(task => task.isDone == true)
    return alreadyDone.length
  })

  function tasksAreEmpty() {
    if (tasksCounter == 0) {
      return true
    } else {
      return false
    }
  }

  function handleAddTask(event: FormEvent){
    const newTask = {
      id: Crypto.randomUUID(),
      content: taskContent,
      isDone: false
    }
    
    setTasks([newTask, ...tasks])
    console.log(tasks)
    setTaskContent('')
    setTasksCounter((actualState) => {
      return actualState + 1
    })
  }

  function handleOnMarkAsDone(id: string) {
    const settingTaskAsDone = tasks.map(task => {
      if (task.id == id) {
        task.isDone = !task.isDone
        if (task.isDone) {
          setDoneTasks((actualState) => {
            return actualState + 1
          })
        } else {
          setDoneTasks((actualState) => {
            return actualState - 1
          })
        }
      }
      return task
    })

    setTasks(settingTaskAsDone)
  }

  function handleOnDeleteTask(id: string) {
    const tasksWithoutDeleteOne = tasks.filter(task => {
      if (task.id == id) {
        if (task.isDone) {
          setDoneTasks((actualState) => {
            return actualState - 1
          })
          setTasksCounter((actualState) => {
            return actualState - 1
          })
        } else {
          setTasksCounter((actualState) => {
            return actualState - 1
          })
        }
      }
      return task.id != id ? task : null
    })
    setTasks(tasksWithoutDeleteOne)
  }

    return(
        <>
          <View style={styles.container}>
            <Header />

              <View style={styles.formWrapper}>
                <View style={styles.newTaskForm}>
                  <Input 
                    value={taskContent}
                    onChangeText={setTaskContent}
                  />
                  <Add onPress={handleAddTask}/>
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
                          {tasksCounter}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.doneContainer}>
                      <Text style={styles.doneText}>
                        Concluidas 
                      </Text>
                      <View style={styles.doneCounter}>
                        <Text style={styles.doneCountText}>
                          {doneTasks}
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