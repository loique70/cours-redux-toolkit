import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({ //mon etat
    name: "todo",//le nom de mon etat
    initialState:[
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
    ] ,//Mon etat initiale

    /*On cree ensuite les reducers qui va permettre de faire les interactions avec les donnes.
    Le reducer est une fonction prend en etree l'etat actuel(state) et l'action a effectuer afin de sortir
     un etat final. L'action c'est un objet qui contient deux information : 
     le type de l'action(la tache a faire) et
      le payload(les donnees donc le reducteur a besoin pour travailler)
    */
   reducers: {
    addTasks: (state, action) => {
        //{type:"todo/addTask(ADD_TASK)", payload:"aller faire le marche"}
        const newTask = {
            id: Date.now(),
            done:false,
            text: action.payload
        }

        state.push(newTask)
    },
    toggleTask: (state, action) => {
        //{type: "todo/toggleTaskTOGGLE_TASK", payload: id(20 par exemple)}
        const task = state.find( t => t.id === action.payload)
        task.done = !task.done
    },
    deleteTasks: ( state, action ) => {
        //"type:todo/deleteTask, payload: 20"
        state = state.filter( t => t.id !== action.payload)

        return state
    }

   }
})

//actionCreator
export const {addTasks, deleteTasks, toggleTask} = todoSlice.actions

//Creation de l'entrepot globale(la store)
export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
})