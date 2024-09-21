const userName = process.argv[2];
const userAge = parseInt(process.argv[3]);
const student = process.argv[4] === 'true';

function message(name, age, student) {
  let message = 'Hey my name is ${name}';
  if (student) {
    message += ' and I am a student.';
  }
  if (age <= 18) {
    let message=' you are a minor';
  } else
   {
    console.log(message);
  }
}


let toggleValue=false;
function toggleBoolean(value)
{
    return !value;
}
if (process.avg[2]=='toggle')
{
    toggleValue=toggleBoolean(toggleValue);
   console.log('Toggle value:${toggleValue}');
}
