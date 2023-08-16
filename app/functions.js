// form validation alert

const formValidationAlert = (message, type) => {
    return `<p class=" alert alert-${type} d-flex justify-content-between m-0">${message} <button class="btn-close" data-bs-dismiss="alert"></button></p>`

};

// set data to local storage

const setDataLS = (key, data) => {
   return localStorage.setItem(key, JSON.stringify(data));

};

// get data  form local storage
const getDataLS = (key) => {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key))
        
    }else{
        return [];
    }

};



