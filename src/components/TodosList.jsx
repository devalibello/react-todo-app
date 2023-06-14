import TodoItem from '@/components/TodoItem';
const TodosList = ({ todosProps, handleChange, delTodo, setUpdate }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
        setUpdate={setUpdate}
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo} />
      ))}
    </ul>
  );
};
export default TodosList;
