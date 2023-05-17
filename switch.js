// Your web app's Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, child, push, update } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

var val = true;
function setup() {
    createCanvas(windowWidth, windowHeight);
    button = createButton('click me');
    button.position(windowWidth / 2, windowHeight / 2);
}

function draw() {
    background(150);
    button.mousePressed(change);
    text(val, windowWidth / 2, windowHeight / 2 - 30);
}


function change() {
    if (val) val = false;
    else val = true;
    writeNewPost('/', val)
}

const firebaseConfig = {
    apiKey: "AIzaSyDUK666BeEwvQzeFW_lqx1oUWUiaBAf26Q",
    authDomain: "p5js-firebase-rip.firebaseapp.com",
    databaseURL: "https://p5js-firebase-rip-default-rtdb.firebaseio.com",
    projectId: "p5js-firebase-rip",
    storageBucket: "p5js-firebase-rip.appspot.com",
    messagingSenderId: "1068377010670",
    appId: "1:1068377010670:web:89f5319d23dd55ccc29eff",
    measurementId: "G-W5MP985XXQ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function writeNewPost(userId, val) {
    const db = getDatabase();

    // A post entry.
    const postData = {
        data1: val
    };

    // Get a key for a new Post.
    const newPostKey = push(child(ref(db), 'posts')).key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    return update(ref(db), updates);
}





