// html for to generate the team page

const Employee = require("../lib/Employee");

const teamHtml = (teamMembers) => {

    // creating an empty array to then push the individual team elements to, then loop over them to make the whole team
    const teamHtmlArr = [];

    // creating functions with html for all the individual team members
    const engineerDiv = (engineer) => {
        const engineerhtml = ` <div class="card">
        <img src="../develop/Assets/images/developer.png"src="develop/Assets/images/developer.png" alt="icon of female programmer"<a href="https://www.flaticon.com/free-icons/programmer" </a>
        <div class="container">
            <h2><b>${engineer.name}</b></h2>
            <h3>Engineer</h3>
            <p>Email: <a href=mailto:">${engineer.email}</a></p>
            <p>Employee ID: ${engineer.id}</p>
            <p>GitHub: <a>${engineer.gitHub}</a></p>
        </div>
    </div>
        `
        teamHtmlArr.push(engineerhtml);
    };

    const internDiv = (intern) => {
        const internHtml = ` <div class="card">
        <img src="../develop/Assets/images/internship.png" alt="icon of male intern"<a href="https://www.flaticon.com/free-icons/internship"</a>
        <div class="container">
            <h2><b>${intern.name}</b></h2>
            <h3>Engineer</h3>
            <p>Email: <a href=${intern.email}">Send Email</a>${intern.email}</p>
            <p>Employee ID: ${intern.id}</p>
            <p>University: ${intern.school}</p>
        </div>
    </div>
        `
        teamHtmlArr.push(internHtml);
    };

    const managerDiv = (manager) => {
        const managerHtml = ` <div class="card">
        <img src="../develop/Assets/images/manager.png" alt="icon of female manager"<a href="https://www.flaticon.com/free-icons/professional"</a>
        <div class="container">
            <h2><b>${manager.name}</b></h2>
            <h3>Engineer</h3>
            <p>Email:<a href = "mailto:${manager.email}">Send Email</a>${manager.email}</p>
            <p>Employee ID: ${manager.id}</p>
            <p>Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
        `
        teamHtmlArr.push(managerHtml);
    };

    // for loop to keep going through the above function and push them to the htmlArr
    for (let i = 0; i < teamMembers.length; i++) {
        // looping over all the entries
        if (teamMembers[i].getRole() === 'Manager') {
            managerDiv(teamMembers[i]);
        }

        if (teamMembers[i].getRole() === 'Engineer') {
            engineerDiv(teamMembers[i]);
        }

        if (teamMembers[i].getRole() === 'Intern') {
            internDiv(teamMembers[i]);
        }
    }

    // console.log(teamHtmlArr);
    // need to join the array into a single string
    return teamHtmlArr.join('');

};

// 
module.exports = teamArr => {
    return ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../dist/style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
    <div class="header-div">
        <h1 class="header">My Team</h1>
    </div>
    <div class="flex-container">
      ${teamHtml(teamArr)}
    </div>

    </body>
    </html>
    `
};
