import React, { useState } from 'react';

type FormElem = React.FormEvent<HTMLFormElement>;

export const ToDoForm: React.FC = () => {

    const [activity, setActivity] = useState<string>("");

    const handleSubmit = (e: FormElem): void => {
        e.preventDefault();
        setActivity("");
    }

    return (
        <div className="uk-flex uk-flex-center" uk-grid="true">
            <form onSubmit={handleSubmit} className="uk-width-1-4">
                <fieldset className="uk-fieldset uk-text-center">
                    <legend className="uk-legend">Activities</legend>
                    <div className="uk-margin">
                        <input type="text" className="uk-input" required value={activity} onChange={e => setActivity(e.target.value)}/>
                    </div>
                    <div className="uk-margin">
                        <button className="uk-button uk-button-secondary uk-width-1-1">Add Activity</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
