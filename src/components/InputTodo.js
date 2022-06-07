import React from 'react';

const InputTodo = () => (
    <div>
        <form className="form-container">
            <input
                type="text"
                className="input-text"
                placeholder="Add todo..."

                name="title"

            />
            <button className="input-submit">Submit</button>
        </form>
    </div>
);
export default InputTodo;
