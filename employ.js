let updateData = null;


const foramdata = document.getElementById("employ")
foramdata.addEventListener("submit", submitData)

const printData = (ans = []) => {
    let print = '';
    print += `
     <table border="1">
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Action</th>
        </tr>
    `
    const localdata = JSON.parse(localStorage.getItem("emp"))
    let local = ans.length==0?localdata:ans
    
    local.map((v) => {
        print += `
        <tr>
        <td>${v.name}</td>
        <td>${v.age}</td>
        <td>${v.salary}</td>
        <td><button onclick="deleteData(${v.id})">Delete</button> <button onclick="editData(${v.id})">Edit</button></td>
        </tr>
        `

    })
    print += `</table>`
    document.getElementById("printtable").innerHTML = print;
    localStorage.setItem("emp", JSON.stringify(localdata));
}

const searchData = () =>{
    let search = document.getElementById("search").value;
    const localdata = JSON.parse(localStorage.getItem("emp"))

    console.log(search);
     let ans = localdata.filter((v)=>{
        if(v.name.toLowerCase().includes(search.toLowerCase())){
           
            return v
            // printData();
        }
    })
    console.log(ans);
    printData(ans);
    // console.log(searchdata);

    
    
}
const hendalsort= ()=>{
    const localdata = JSON.parse(localStorage.getItem("emp"))
    let sortdata = document.getElementById("sort"). value;
    console.log(sortdata);
    let ans = localdata.sort((a,b)=>{
        if(sortdata == "lh"){
            return a.salary - b.salary;
        }else if(sortdata == "hl"){
            return b.salary - a.salary;
        }else if(sortdata == "a-z"){
            return a.name.localeCompare(b.name);
        }else if(sortdata == "z-a"){
            return b.name.localeCompare(a.name);
        }
    })
    console.log(ans);
    printData(ans);
    // if(sortdata == "lh"){
    //     let sortdataa = localdata.sort((a,b)=>{
    //         return a.salary - b.salary;
    //     })
        
    //     console.log(sortdataa);
        
    //     printData(sortdataa);
    // } else if(sortdata == "hl"){
        
    //     let sortdataa = localdata.sort((a,b)=>{
    //         return b.salary - a.salary;
    //     })
    //     console.log(sortdataa);
        
    //     printData(sortdataa);
    // }else if(sortdata == "a-z"){
    //     let sortdataa = localdata.sort((a,b)=>{
    //         return a.name.localeCompare(b.name);
    //     })
    //     console.log(sortdataa);
    //     printData(sortdataa);
    // }else if(sortdata == "z-a"){
    //     let sortdataa = localdata.sort((a,b)=>{
    //         return b.name.localeCompare(a.name);
    //     })
    //     console.log(sortdataa);
    //     printData(sortdataa);
    // }
    
}
window.onload = printData();
function submitData() {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let age = parseInt(document.getElementById("age").value);
    let salary = parseInt(document.getElementById("salary").value);


    let obj = {
        id: Math.floor(Math.random() * 1000),
        name,
        age,
        salary
    }
    let formerr = false;


    // if (!name || !age || !salary) {
    //     document.getElementById("err").innerHTML = "! Please enter all the fields";
    //     return;
    // }



    console.log(name);

    if (name == "") {
        document.getElementById("nameerr").innerHTML = "! Please enter name";
        formerr = true;

    } else {
        var nameRegex = /^[a-zA-Z ]{2,30}$/;

        if (nameRegex.test(name)) {
            document.getElementById("nameerr").innerHTML = "";
        } else {
            document.getElementById("nameerr").innerHTML = "! Please enter valid name";
            formerr = true;
        }

    }

    if (!age ){
        document.getElementById("ageerr").innerHTML = "! Please enter age";
        formerr = true;

    


    }else{
        // if(age > 18 && age > 50   ) {
        //     document.getElementById("ageerr").innerHTML = "! Please enter valid age";
        //     formerr = true;
        // }else {
        //     var nameRegex = /^\S[0-9]{0,3}$/;

        //     if (nameRegex.test(name)) {
        //         document.getElementById("nameerr").innerHTML = "";
        //     } else {
        //         document.getElementById("nameerr").innerHTML = "! Pleaseeee enter valid age";
        //         formerr = true;
        //     }
        // }

    }

    if (salary == "") {
        document.getElementById("salaryerr").innerHTML = "! Please enter salary";
        formerr = true;
    } else {
        
    }

    // if(!age  ){
    //     document.getElementById("ageerr").innerHTML = "! Please enter age";
    //     formerr = true;

    // }else if(age<50){
    //     document.getElementById("ageerr").innerHTML ="Please enter age greater than 50";
    //     formerr = true;

    // }else{
    //     document.getElementById("ageerr").innerHTML = "";
    //     if(age){

    //         if(updateData==null){

    //             if (localdata) {

    //                 localdata.push(obj)
    //                 localStorage.setItem("emp", JSON.stringify(localdata));
    //             } else {
    //                 localStorage.setItem("emp", JSON.stringify([obj]));
    //             }

    //         }else{
    //             let i = localdata.findIndex((v) => v.id == updateData);
    //             localdata[i] = obj;
    //             localStorage.setItem("emp", JSON.stringify(localdata));

    //             updateData = null;
    //         }
    //     }
    // }

    // if(!salary){
    //     document.getElementById("salaryerr").innerHTML = "! Please enter salary";
    //     formerr = true;

    // }else{
    //     document.getElementById("salaryerr").innerHTML = "";

    //     if(salary){

    //         if(updateData==null){

    //             if (localdata) {

    //                 localdata.push(obj)
    //                 localStorage.setItem("emp", JSON.stringify(localdata));
    //             } else {
    //                 localStorage.setItem("emp", JSON.stringify([obj]));
    //             }

    //         }else{
    //             let i = localdata.findIndex((v) => v.id == updateData);
    //             localdata[i] = obj;
    //             localStorage.setItem("emp", JSON.stringify(localdata));

    //             updateData = null;
    //         }
    //     }
    // }





    if (formerr === true) {
        // return false;
    } else {
        const localdata = JSON.parse(localStorage.getItem("emp"))
            if (updateData == null) {

                if (localdata) {

                    localdata.push(obj)
                    localStorage.setItem("emp", JSON.stringify(localdata));
                } else {
                    localStorage.setItem("emp", JSON.stringify([obj]));
                }

            } else {
                let i = localdata.findIndex((v) => v.id == updateData);
                localdata[i] = obj;
                localStorage.setItem("emp", JSON.stringify(localdata));

                updateData = null;
            }
       

        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("salary").value = "";



        console.log(obj);
        printData();
    }


}

const deleteData = (id) => {
    console.log(id);

    const localdata = JSON.parse(localStorage.getItem("emp"))
    let i = localdata.findIndex((v) => v.id == id);
    localdata.splice(i, 1);
    localStorage.setItem("emp", JSON.stringify(localdata));
    printData();

    console.log(i);

}
const editData = (id) => {
    console.log(id);
    const localdata = JSON.parse(localStorage.getItem("emp"))

    let i = localdata.find((v) => v.id == id);

    console.log(i);
    document.getElementById("name").value = i.name;
    document.getElementById("age").value = i.age;
    document.getElementById("salary").value = i.salary;

    updateData = id;

    // let i = localdata.findIndex((v)=>v.id ==id);
    // console.log(localdata[i]);
    // document.getElementById("name").value = localdata[i].name;
    // document.getElementById("age").value = localdata[i].age;
    // document.getElementById("salary").value = localdata[i].salary;
}

