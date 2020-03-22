import React, { Fragment, useState } from 'react';

type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
    text: string;
    completed: boolean;
}

const ToDoForm: React.FC = () => {

    const [activity, setActivity] = useState<string>("");
    const [todos, setTodos] = useState<ITodo[]>([]);

    const handleSubmit = (e: FormElem): void => {
        e.preventDefault();
        addTodo(activity);
        setActivity("");
    }

    const addTodo = (text: string) => {
        const newTodo: ITodo[] = [...todos, { text, completed: false }];
        setTodos(newTodo);
    }

    return (

        <Fragment>
            <div className="uk-container uk-flex uk-flex-center">
                <form onSubmit={handleSubmit} className="uk-width-1-3">
                    <fieldset className="uk-fieldset uk-text-center">
                        <legend className="uk-legend">Activities List</legend>
                        <div className="uk-margin">
                            <input type="text" className="uk-input" required value={activity} onChange={e => setActivity(e.target.value)} />
                        </div>
                        <div className="uk-margin">
                            <button className="uk-button uk-button-secondary uk-width-1-1">Add Activity</button>
                        </div>
                    </fieldset>
                </form>
            </div>

            <div className="uk-container uk-flex uk-flex-center uk-margin-top">
                <ul className="uk-list uk-list-divider uk-width-1-3 uk-text-center">
                    {todos.map((todo: ITodo, index: number) => (
                        <li key={index}>{todo.text}</li>
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}

export default ToDoForm
