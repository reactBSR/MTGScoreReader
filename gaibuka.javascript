function dispTextarea(){

	var tarea  = document.inputtext.msg.value;
	var lines = tarea.split( '\n' );
	var text = '';
	var textarray;
	var wins = 0;
	var lose = 0;
	var htmltext = '';
 
    for ( var i = 0; i < lines.length; i++ ) {
      // 空行は無視する
      if ( lines[i] == '' ) {
        continue;
      }
      textarray = lines[i].split("	");
      if ( textarray[1] == "勝利"){
      	wins = wins + 1;
      } else if( textarray[1] == "敗北"){
      	lose = lose + 1;      
      }
    }
    
    htmltext = "勝利数:" + wins + ":敗北数：" + lose;

    document.getElementById("result").innerText = htmltext;

