import React , { useEffect , useState } from "react";
import { db } from "../Firebase";
import {
    collection ,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";
import TodoHeader from "./TodoHeader";
import NavBar from './NavBar';
import img from "../assets/todo.png"












const TodoApp = () => {
    const [list , setList] = useState([]);
    const [text , settext] = useState("");
    const [indNumber , setindNumber ] = useState("");
    const [editText , seteditText] = useState("");
    const [refresh , setrefresh ] = useState(false)
    const dbCollection = collection(db , "todoCollection");


    useEffect(() => {
        async function getData(){
            const dbCollection = collection(db , "todoCollection");
            const querySnapshot = await getDocs(dbCollection);
            const array = [];
        querySnapshot.forEach((doc) => {
            array.push({
                id: doc.id,
                value: doc.data().todoValue
            })
        });
        setList([...array])
        }
        getData()
    },[refresh])

   


    const add = async () => {
        if(!text){
            alert("Add Todo"); 
        } else if (text.length > 10) {
            alert("Correct todo");
            settext("") 
        }
        else {
            const obj = {
                todoValue : text
            };
            await addDoc(dbCollection , obj);
            setrefresh(!refresh)
            settext('');
            ///old
            // setList([...list , ({ value : text})]);

        };
    }
    const del = async (i) => {
        const id = list[i].id;
        const dbRef = doc(db , "todoCollection" , id);
        await deleteDoc(dbRef);
        list.splice(i,1);
        setList([...list]);
    }
    const edit = (i) => {
        seteditText(list[i].value);
    }
    const DelAll = () => {
        setList([]);
    }
    const updateTodo = async (i) => {
        if (!list[i]){
            alert("Add Todo")
        }
        else if (list[i].length > 10){
            alert("Correct Todo")
        }else {
            const id = list[i].id
            const dbRef = doc(db , "todoCollection" , id);
            await updateDoc(dbRef , {
                todoValue : editText
            })
            list.splice(i,1, { value : editText , id});
            setList([...list]);
            setindNumber("");
            seteditText("");
        }
}    
    return(
    <>
    <NavBar />
        <section className='Main-Todo'>
            <section className='Section-Todo'>
            <TodoHeader img={img} />
            <div className="Input-Div" style={{marginBottom : "5px"}}>
            <div>
                <input
                value={text} 
                placeholder="✍️ Add items ..."
                onChange={(e) => settext(e.target.value)}
                className="Input"
                />       
            </div>
            <div>
               <button
                      className="Add-Todo"
                      onClick={add}
                    >
                      <i 
                        className="fa-regular fa-plus"
                        ></i>
                </button>

            </div>
           </div>      



            {
                list.map((e,i) => {
                    return (
                        <section key={i}>
                            {indNumber === i ? ( <div className="Input-Div">
                                    <div>
                                        <input 
                                          type="text"
                                          onChange={(e) => seteditText(e.target.value)} 
                                          className="Input"
                                          value={editText}
                                          autoFocus
                                        />
                                    </div>
                                    <div>
                                        <button
                                        className="Add-Todo"
                                        onClick={
                                            () => updateTodo(i)
                                        }
                                        ><i className="fa-solid fa-pen"></i></button>
                                    </div>
                                </div>
                                ):( <div className="List-Todo">
                                    <div className="List-Item">
                                        <ul>
                                            <li>
                                                    {e.value}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="Edit-Del">
                                        <button 
                                          onClick={
                                            () => del(i)
                                        }
                                          className="Del-Btn"
                                          style={{marginRight : "10px" , width : "100%"}} 
                                        >
                                            <i 
                                              className="fa-solid fa-trash-can"
                                              style={{fontSize : "20px"}}
                                            >
                                            </i>
                                        </button>
                                        <button 
                                          onClick={
                                            () => {
                                            setindNumber(i); 
                                            edit(i);
                                        }}
                                        className="Edit-Btn"
                                        style={{marginRight : "5px"}} 
                                        >
                                            <i 
                                              className="fa-solid fa-pen-to-square"
                                               style={{fontSize : "20px"}}
                                            >
                                            </i>
                                        </button>                                
                                </div>
                                </div>
                    )}
                        </section>
                    )
                    })
            }
            <div className="Del-All">
                <button
                  onClick={() => DelAll()}
                >
                    <span className="material-symbols-outlined"
                    style={{fontSize : "30px"}}
                    >
                        delete_sweep
                    </span>
                </button>
            </div>
            </section>
        </section>
           
        </>
    )
}
export default TodoApp;



