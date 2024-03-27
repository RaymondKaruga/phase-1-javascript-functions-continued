function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  console.log(saturdayFun())

  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
console.log(mondayWork("work from home"))  

function wrapAdjective(sign = "*"){
    return function(adjective) {
        return `You are ${sign}${adjective}${sign}!`;
      }
    }
