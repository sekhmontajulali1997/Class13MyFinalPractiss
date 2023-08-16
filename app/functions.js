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
// post time functions

function getFacebookPostTime(postDate) {
    const currentDate = new Date();
    const postDateTime = new Date(postDate);
    const timeDiffInSeconds = Math.floor((currentDate - postDateTime) / 1000);
  
    if (timeDiffInSeconds < 60) {
      return `${timeDiffInSeconds} seconds ago`;
    } else if (timeDiffInSeconds < 3600) {
      const minutes = Math.floor(timeDiffInSeconds / 60);
      return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    } else if (timeDiffInSeconds < 86400) {
      const hours = Math.floor(timeDiffInSeconds / 3600);
      return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else if (timeDiffInSeconds < 604800) {
      const days = Math.floor(timeDiffInSeconds / 86400);
      return `${days} day${days === 1 ? '' : 's'} ago`;
    } else {
      // If more than a week, display the full date
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return postDateTime.toLocaleDateString(undefined, options);
    }
  }
  
  // Example usage:
  const postDate = "2023-08-02T15:30:00"; // Replace this with your post date
  const fbPostTime = getFacebookPostTime(postDate);
 
  

// reandom id genarator

  function generateRandomID() {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const idLength = 26;
    let randomID = '';
  
    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      randomID += chars.charAt(randomIndex);
    }
  
    return randomID;
  };