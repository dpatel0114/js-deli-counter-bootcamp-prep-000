function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
 if (line.length===0) {return "There is nobody waiting to be served!"}
 else {return `Currently serving ${line.shift()}.`}
}

function currentLine(line){
  var s=
  for (var i=0; i<line.length; i++){`The line is currently: ${name}, `}
}