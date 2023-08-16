const students_add_Form = document.querySelector('#students_add_Form');
const for_auto_close = document.querySelector('.for_auto_close');
const validationAlert = document.querySelector('.validationAlert');   
const studentsListt = document.querySelector('.studentsListt');   



// show students list

const showStudentsList = () =>{

    const alldata = getDataLS('students_Data');

    let studentsList = '';

    if (alldata.length > 0) {

        alldata.map((item, index) => {


            
            studentsList +=`
            
            <tr class="text-center align-middle">
            <th scope="row">${index+1}</th>
            <td><img style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover;"  src="${item.students_photo}" alt=""></td>
            <td>${item.students_name}</td>
            <td>${item.students_roll}</td>
            <td>${item.students_reg_no}</td>
            <td>${getFacebookPostTime(item.create_at)}</td>
            <td><Button class=" add_marksbtn"> Add Marks</Button></td>
            <td>
            <i class="fa-regular fa-eye forPreview"></i>
            <i class="fa-regular fa-pen-to-square forEdit"></i>
            <i  class="fa-solid fa-trash forTrash" onclick = " fotDelete('${item.id}')"></i>
           
            </td>
          </tr>
            
            `

        })

    }else{

        studentsList = ` <td colspan = "8"> <h4 style= "text-align: center; color:red;"> Please Create Students List  </h4>  </td>`

    }
    studentsListt.innerHTML = studentsList;
}
showStudentsList();


// delete students list

const fotDelete = (id) =>{
    const alldata = getDataLS('students_Data');
    const updateDta = alldata.filter((data) => data.id !== id);
    setDataLS('students_Data',updateDta );
    showStudentsList();

}








students_add_Form.onsubmit = (e) =>{
    e.preventDefault();

    const addStudentsData = new FormData(e.target);
    const allData = Object.fromEntries(addStudentsData);
   
    
    // Form Validations 

     if (!allData.students_photo.trim() && !allData.students_name.trim() && !allData.students_roll.trim() && !allData.students_reg_no.trim()) {
         validationAlert.innerHTML  = formValidationAlert('All Fields Are Required ', 'danger')
        
    }else{

         const prev = getDataLS('students_Data');



         prev.push(
        {
            students_photo: allData.students_photo,
            students_name: allData.students_name,
            students_roll: allData.students_roll,
            students_reg_no: allData.students_reg_no,
            create_at: Date.now(),
            id: generateRandomID(26),
            result: null,
        }
    );
    setDataLS('students_Data',prev );
    showStudentsList();
        for_auto_close.click();
     };
  
e.target.reset();

};
