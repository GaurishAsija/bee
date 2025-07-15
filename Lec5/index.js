let users=[
    {
        id:1,
        name:"nitesh",
        age:24,
    },


    {
        id:2,
        name:"sachin",
        age:25,
    }
]
function isAllowed(id) {
    let user = users.find (user => user.id === id);
        if (user) {
           console.log("User not found");
        }else {
            console.log(user);
        }
    }
isAllowed(1);