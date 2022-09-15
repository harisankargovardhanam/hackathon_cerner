var team;
export async function verifyLogin({ username, password }) {
  var user = [{
    username: "CC admin",
    password: "password",
    team: "Charting Core"
  },{
    username: "CC member",
    password: "password",
    team: "Charting Core"
  },
  {
    username: "DC admin",
    password: "password",
    team: "Doc Core"
  },
  {
    username: "DC member",
    password: "password",
    team: "Doc Core"
  },
  {
    username: "CRD admin",
    password: "password",
    team: "Chart Review Dev"
  },
  {
    username: "CRD member",
    password: "password",
    team: "Chart Review Dev"
  }
]
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var isresolve = false
        user.forEach((user)=>{
          if (username === user.username && password === user.password){
            team = user.team
            isresolve = true
            resolve()
          }
        })
        if (!isresolve){
          reject()
        }

    }, 1000);
  });
}
export function user(){
  if (team !== ''){
    return team;
  }
else {
  return false;
}
}
