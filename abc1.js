const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');
const n4 = document.getElementById('n4');
const con = document.getElementById('con');

// const container=document.getElementById('container');
const listwork = document.getElementById('listwork');
let todolist = [];

con.addEventListener('submit', function(e) {
    e.preventDefault()
    addlistwork()
})

function addlistwork() {
    const newlistwork = n1.value;
    const newlistwork2 = n2.value;
    const newlistwork3 = n3.value;
     const newlistwork4 = n4.value;

    let data = {
        text: newlistwork,
        text2: newlistwork2,
        text3: newlistwork3,
         text4: newlistwork4,
        complete: false
    }
    todolist.push(data);
    console.log(todolist);
    render()
}

function render() {
    listwork.innerHTML = null;
    for (let i = 0; i < todolist.length; i++) {
        const item = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.addEventListener("click", function(e) {
            //console.log(todolist[i],i);
            todolist[i].complete = e.target.checked;

            if (todolist[i].complete) {
                item.classList.add("complete");
                item.classList.remove("uncomplete");
                checkbox.checked = todolist[i].complete;
            } else {
                item.classList.add("uncomplete");
                item.classList.remove("complete");
                checkbox.checked = todolist[i].complete;
            }
        })


        const text = document.createElement("n1");
        text.innerText = todolist[i].text;

        const text2 = document.createElement("n2");
        text2.innerText = todolist[i].text2;

        const text3 = document.createElement("n3");
        text3.innerText = todolist[i].text3;

         const text4 = document.createElement("n4");
        text4.innerText = todolist[i].text4;

        const button = document.createElement("button");
        button.innerText = "X";

        button.addEventListener("click", function(e) {
            todolist.splice(i, 1);
            render();
        })

        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(text2);
        item.appendChild(text3);
         item.appendChild(text4);
        item.appendChild(button);
        listwork.appendChild(item);
        n1.value = null;
        n2.value = null;
        n3.value = null;
        n4.value = null;
    }
}