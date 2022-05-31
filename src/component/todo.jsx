import React, { useState } from 'react'
import todologo from "../images/todologo.svg";
import "../App.css"
import "./todo.css"
const Todo = () => {
    const [inputData, SetinputData] = useState('');

    const [items, setItem] = useState([])

    const addItem = () => {

        if (!inputData) {

        }
        else {
            setItem([...items, inputData]);
            SetinputData("");
        }
    }
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src={todologo} alt="todologo" />
                        <figcaption>Add Your List Here ✌️ </figcaption>
                    </figure>

                    <div className='addItems'>
                        <input type="text" placeholder="✍️ Add Items..."

                            value={inputData}
                            onChange={(e) => SetinputData(e.target.value)}

                        />
                        <i className="fa fa-plus add-btn" title='Add Item' onClick={addItem}></i>
                    </div>

                    <div className='showItems'>


                        {
                            items.map((elem, index) => {
                                return (
                                    <div className='eachItem' key={index}>
                                        <h3>{elem}</h3>
                                        <i className="far fa-trash-alt add-btn" title='Delete Item' onClick={ () => deleteItem}></i>
                                    </div>
                                );
                            })
                        }
                    </div>

                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text="Remove All"><span>Checklist</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo