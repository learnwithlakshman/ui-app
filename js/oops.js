class Student{
    constructor(name,marks){
        this.name = name;
        this.marks = marks;
    }
    total(){
        return this.marks.reduce((s,ele)=>s+ele,0);
    }
    grade(){
        let t = this.total();
        return t > 40 ? "A" : t > 25 && t <= 40 ? "B": "C";

    }
}
s1 = new Student("Krish",[8,9,8,9,9]);
s2 = new Student("Manoj",[8,7,9,7,7]);
s3 = new Student("Nareen",[8,7,9,7,7]);
s4 = new Student("Naresh",[8,9,8,9,8]);
s5 = new Student("Mahesh",[8,7,8,8,9]);



const students = [s1,s2,s3,s4,s5];

for(let student of students){
    console.log(student.name);
    console.log(student.total());
    console.log(student.grade());
    console.log("----------------")
}

// Student who has score grade "A"

students.filter(ele=>ele.grade()==="A").forEach(ele=>{
    console.log(ele.name,ele.grade());
})

//
let names = students.map(ele=>ele.name)
names.forEach((name,index)=>{
    console.log(index+1+ '.',name)
})

students.sort((s1,s2)=>s2.total() - s1.total())
        .filter(ele=>ele.grade()==="A")
        .map(ele=>ele.name)
        .forEach(name=>console.log(name));



const book1 = {
    title:"Let us JS",
    author:"Rajesh",
    price:450,
    showInfo: function(){
        console.log(`Title ${this.title}\nAuthor :${this.author}\nPrice :${this.price} `)
    }

}
book1.showInfo();