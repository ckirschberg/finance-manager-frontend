import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList } from 'react-native';
import { useQuery } from '@tanstack/react-query'
import { TodoQueries } from './todo.queries';
import { TodoEntity } from './todo.entity';

type ItemProps = {todo: TodoEntity};

const Item = ({todo}: ItemProps) => (
    <View>
      <Text>{todo.text} - {todo.done.toString()}</Text>
    </View>
  );

const TodoScreen = () => {
    const [todoText, setTodoText] = useState('');

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['todos'],
        queryFn: TodoQueries.fetchTodoList,
      })
    
      if (isPending) {
        return <Text>Loading...</Text>
      }
    
      if (isError) {
        return <Text>Error: {error.message}</Text>
      }
    

    const handleAddTodo = () => {
        // Add your logic here to handle adding the todo
        console.log('Adding todo:', todoText);
        setTodoText('');
    };

    return (
        <View style={{flex: 1, justifyContent: 'center', marginTop: 60, marginLeft: 20}}> 

            <FlatList data={data}
            renderItem={({item}) => <Item todo={item} />}
            keyExtractor={item => item.id} />


            <TextInput
                placeholder="Enter todo"
                value={todoText}
                onChangeText={setTodoText}
            />
            <Button title="Add Todo" onPress={handleAddTodo} />
        </View>
    );
};

export default TodoScreen;