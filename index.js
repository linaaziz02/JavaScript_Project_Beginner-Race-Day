/*RACE DAY
*You have been hired to write a program that will register runners for the race and give them instructions on race day.

As a timeline, registration would look like this:registration-timeline

Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:
Early adults receive a race number at or above 1000.
All others receive a number below 1000.

Start time:
Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.*/

//Assign race number randomly
let raceNumber = Math.floor(Math.random() * 1000); // will ensure that we only have whole numbers from 0 to 999.

/*Create a variable that indicates whether a runner registered early or not.
*Set is to equal a Boolean value*/
let registeredEarly = true; //Can be changed later as you test different runner conditions

//Create a variable for the runner's age. Can be changed later.
let runnerAge = 32;

/*Create a control flow statement that checks whether the runner is an adult and registered early.
*Add 1000 to their raceNumber if it's true.
*Include their raceNumber*/
if (registeredEarly && runnerAge > 18) {
  raceNumber += 1000;
  console.log(`Contestant number ${raceNumber}, the race will start at 9.30am`);
}
else if (!registeredEarly && runnerAge > 18) {
  console.log(`Contestant number ${raceNumber}, late adults run at 11.00 am.`);
}
else if ((registeredEarly || !registeredEarly) && runnerAge < 18) {
  console.log(`Contestant number ${raceNumber}, youth registrants run at 12.30pm.`);
}
else {
  console.log("Contestant who are 18 years old, please see the registration desk.")
}








