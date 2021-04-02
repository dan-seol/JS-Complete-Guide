const task3Element = document.getElementById('task-3');

function f1() {
    alert('Hello there!');
}

let f2 = (name) => {
    alert(name);
};

f1();
f2("Dan");
task3Element.addEventListener('click', f1);

function f3(s1, s2, s3) {
    return s1 + s2 + s3;
}

alert(f3('a', 'b', 'c'));