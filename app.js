// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEP5ZlCoGCgZuRRE1nAFrF-Z2mqbPEQ28",
    authDomain: "todo-database-b4604.firebaseapp.com",
    databaseURL: "https://todo-database-b4604-default-rtdb.firebaseio.com",
    projectId: "todo-database-b4604",
    storageBucket: "todo-database-b4604.appspot.com",
    messagingSenderId: "697952837055",
    appId: "1:697952837055:web:12d277ebe165d6b7eb150a",
    measurementId: "G-DCM51EVRKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





window.addTodo = function () {
    //For Add List List 
    var li = document.createElement('li')
    var liText = document.createTextNode(todoItems.value)
    li.appendChild(liText)
    list.appendChild(li)
    todoItems.value = ""
    //For Delete Button List

    var delBtn = document.createElement('button')
    var btnText = document.createTextNode('Delete')
    delBtn.setAttribute('class', 'btn btn-dark')
    delBtn.setAttribute('onclick', 'deleteTodo(this)')
    delBtn.appendChild(btnText)
    li.appendChild(delBtn)
    list.appendChild(li)
    //For Edit Button List

    var editBtn = document.createElement('button')
    var editBtnText = document.createTextNode('Edit')
    editBtn.setAttribute('class', 'btn btn-dark')
    editBtn.setAttribute('onclick', 'editTodo(this)')
    editBtn.appendChild(editBtnText)
    li.appendChild(editBtn)
    list.appendChild(li)

}

window.deleteTodo = function (e) {
    e.parentNode.remove()
}
window.deleteAllTodo = function () {
    list.innerHTML = ""
}
window.editTodo = function (e) {
    var val = prompt("Enter Your Updated ToDo", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val
}
