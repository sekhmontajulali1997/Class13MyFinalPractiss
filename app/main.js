const students_add_Form = document.querySelector('#students_add_Form');
const for_auto_close = document.querySelector('.for_auto_close');
const validationAlert = document.querySelector('.validationAlert');


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
            result: null,
        }
    );
    setDataLS('students_Data',prev );
        for_auto_close.click();
     };
  
e.target.reset();

};
