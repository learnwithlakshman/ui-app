const profile =  {
    "empno": 1007,
    "ename":"Lakshman",
    "is_working":true,
    "email":["lakshman.a@heraizen.com","lakshman.miani@gmail.com"],
    "address":[
       {
       "city":"Bangalore",
       "state":"KA",
       "zipcode":560070
            },

       {
       "city":"Guntur",
       "state":"AP",
       "zipcode":522612
            }
   ]

} 
localStorage.setItem("profile",JSON.stringify(profile));
s_profile = JSON.parse(localStorage.getItem("profile"));
console.log(s_profile.ename);
console.log(s_profile.address);
sessionStorage.setItem("user","Krishna");