import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ADDNEW_TODO,
  GETALL_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TAB,
} from "./type";

const API_URL = "https://taskmasterapibackend.onrender.com";

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, { data });
    // console.log(res.json());
    dispatch({ type: ADDNEW_TODO, payload: res.data });
    toast.success(" New Task added ");
  } catch (error) {
    console.log("Error while calling addNewTodo API ", error.message);
    toast.error("Error while adding new Task");
  }
};

export const getAllTodos = () => async (dispatch) => {
  try {
    // Show loading toast
    const res = await axios.get(`${API_URL}/todos`);
    console.log(res);
    

    dispatch({ type: GETALL_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling getAllTodos API ", error.message);
    toast.error("Error while loading ");
  }
};

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos/${id}`);

    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling getAllTodos API ", error.message);
  }
};

export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/todos/${id}`, { data });

    dispatch({ type: UPDATE_TODO, payload: res.data });
    toast.success("Task Updated Succesfully");
  } catch (error) {
    console.log("Error while calling updateTodo API ", error.message);
    toast.error("Error while Deleting ");
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${API_URL}/todos/${id}`);

    dispatch({ type: DELETE_TODO, payload: res.data });
    toast.warn("Task Deleted !");
  } catch (error) {
    console.log("Error while calling deleteTodo API ", error.message);
    toast.error("Error While Deleting");
  }
};

export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLE_TAB, selected: tab });
};
