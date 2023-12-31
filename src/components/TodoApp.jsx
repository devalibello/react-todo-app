import React from 'react';
import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';

const TodoApp = () => {
    return (
        <div className="wrapper">
            <div className="todos">
                <React.Fragment>
                    <Header />
                    <TodosLogic />
                </React.Fragment>
            </div>
      </div>

    );
  };
  export default TodoApp;
  