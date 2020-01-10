function avgWord(tokens){
  let totalLength = tokens.join("").length;
  return (totalLength / tokens.length).toFixed(2);
}

function uniqueWord(tokens){
  let results = [];

  for(i = 0; i < tokens.length; i++){
    if(results.indexOf(tokens[i]) === -1){
      results.push(tokens[i]);
    }
  }
  return results.length;
}

function tokenizeText(text) {
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}


function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
}

function execDataOnScreen(text){
  let tokens = tokenizeText(text);
  let avgWordLength = avgWord(text);
  let wordTotal = tokens.length;
  let distinctiveWord = uniqueWord(text);

  let displayTag = $('jsResults');
  displayTag.find('.jsAvgWord').text(avgWordLength + " :characters");
  displayTag.find('.jsTotalWord').text(wordTotal);
  displayTag.find('.jsUniqueWord').text(distinctiveWord);
  displayTag.removeClass('hidden');
}

function watchFormSub(){
  $('#jsFormSub').on('submit' function(e){
    e.preventDefault();
    let userText = $('input[name="textHere"]').val();
    execDataOnScreen(removeReturns(userText));

  })
}
