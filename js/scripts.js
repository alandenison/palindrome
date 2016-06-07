$(document).ready(function() {
  $("form#wordInput").submit(function(event) {
    var forwardChars = [];
    var forward = $("input#something").val();
    for(char=0; char <= (forward.length - 1); char +=1) {
      forwardChar = forward.slice(char, (char+1));
      forwardChars.push(forwardChar);
    }
    alert(forwardChars);
    var backward = forwardChars.slice();
    backward.reverse();
    alert(forwardChars);
    var backString = backward.toString();
    var forString = forwardChars.toString();
    alert(backString);
    alert(forString);
    if(backString === forString) {

    alert("this is a palindrome"); }
      else{
        alert("this is not a palindrome");
      }

    event.preventDefault();
    });
  });
