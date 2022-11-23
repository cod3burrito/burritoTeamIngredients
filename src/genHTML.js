let output = ""; 

const roleOutput = (team) => {
  if(team.role === 'Engineer'){
    return `<a class="list-group-item" href="https://github.com/${team.github}">Github: ${team.github}</a>`
  } else
  {return `<li class="list-group-item">School: ${team.school}</li>`
  }
};

const createTeam = (team) => {
 for (let i = 0; i < team.length; i++){
  let divs = 
  `<div class="card" style="width: 18rem">
    <h3 class="card-header bg-primary text-white"> ${team[i].name} </h3>
    <h5 class="card-header bg-grey text-white">${team[i].role}</h5>
    <div class="card">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${team[i].id}</li>
        <a class="list-group-item" href="mailto:${team[i].email}">Email: ${team[i].email}</a>
        ${roleOutput(team[i])}
      </ul>
    </div>
  </div>
  ` 
output = output + divs;
 }
 return output;
};


const doCode = (manager, team) => {
return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="./assest/style.css">
  <title>Team Generator</title>
</head>    
<header class="bg-danger text-center"> 
  <h1 class="p-4 text-white">My Team</h1> 
</header>
<body>
  <section class="d-flex flex-wrap">
    <div class="card" style="width: 18rem">
      <h3 class="card-header bg-primary text-white"> ${manager.name} </h3>
      <h5 class="card-header bg-primary text-white">Manager</h5>
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.id}</li>
          <a class="list-group-item" href="mailto:${manager.email}">Email: ${manager.email}</a>
          <li class="list-group-item">Office Number ${manager.officeNumber}</li>
        </ul>
      </div>
    </div>  
    ${createTeam(team)}    
  </section>  
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
  integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
<script src="./assets/script.js"></script>
</html> `}

module.exports = {
  genHTML: doCode
}