// Dates

let myDate = new Date();
console.log(myDate); 
console.log(myDate.toString()); 
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString()); 
console.log(typeof myDate); 

let myCreatedDate = new Date('2026, 5, 9');
let myUpdatedCreatedDate = new Date('2026-05-09 12:30:00');
console.log(myCreatedDate.toDateString());
    
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000)); 

let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDate());

newDate.toLocaleString('default', { 
    weekday: 'long',
    timeZone: 'Asia/Karachi' 
});
console.log(newDate.toLocaleString('default', {
    weekday: 'long',
    timeZone: 'Asia/Karachi' 
}));