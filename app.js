var hello = 'Hello World!!!';

// 整数を代入する
var int1 = 1;
// 負数を代入する
var int2 = -10;
// 小数点を代入する
var float1 = 3.14;
// 文字列を代入する
var str1 = 'JavaScriptを覚えよう';　
var str2 = 'Hello World2'
// 足し算,文字列と文字列を結合するには、+記号を使います
//alert(4 + 3);
 
// 引き算
//alert(8 - 5);
 
// 掛け算
//alert(2 * 6);
 
// 割り算
//alert(10 / 2);

// if(条件1){
//     処理1　　
// }
// else if(条件2){　
//     処理2
// }
// else{　　
//     処理3　
// }
// 条件1を満たすときは処理1、条件2を満たすときは処理2、
// どちらも満たさないときは処理3を実行　

var orange = 100;
var apple = 120;
//if(orange < apple){
//	alert('みかんの値段がりんごより安い');
//}
//else if(orange == apple){
//	alert('みかんとりんごが同じ値段');
//}
//else{
//	alert('みかんの値段がリンゴより高い');
//}

//while文
//var max = 200;
//var num = 1;
//var count = 0;
//while(num < max){
//	num = num * 2;
//	count = count + 1;
//}
//alert('2をかけ続けて'+ max + 'を超えるのに必要だった回数は' + count + '回です')　

//for文
//for ( 初期値; 条件式; 増減値 ){　　
//    繰り返し処理　
//}
//var i;
//var num = 0;
//for(i= 1; i < 11; i++){
//	num = num + i;
//}
//alert('１から１０まで足し算した結果は' + num + 'です');

//関数
//関数名「addString」を記述し、引数として「strA」を定義
//function addString(strA){
	//変数名「addStr」に、「Hello 」の文字列と、関数の引数「strA」に設定されている文字列を結合
	//var addStr = "Hello" + strA;
	//結果の格納された「addStr」を、関数の戻り値としている(出力結果が表示)
	//return addStr;
//}
// メイン部分
//var alertString;
//alertString = addString("WebCamp");
// 作成した関数を呼び出す
//alert(alertString);
// 作成した関数
//function addString(strA){
//    var addStr = "Hello " + strA;
//    return addStr;
//}

//入力ダイアログで値を入力
//var promptStr = prompt('何か好きな文字を入力してください。');
//alert(promptStr);

//じゃんけんプロンプト
//var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');
//alert('あなたの選んだ手は' + user_hand + 'です。');

//0～2までのランダムな整数値を生成（関数内の「3」は、ランダム生成したい整数値の
//+1を指定）
//fanction gerJShand(){
//	var js_hand_num = Math.floor( Math.random() * 3 );
	//ランダム生成された数値を基に条件分岐させ、グー・チョキ・パーを出し分けます
//	if(js_hand_num == 0){
//		js_hand = "グー";
//	}else if(js_hand_num == 1){
//		js_hand = "チョキ";
//	}else if(js_hand_num == 2){
//		js_hand = "パー";
//	}
//関数の戻り値として、グー・チョキ・パーの文字列を返します
//	return js_hand;
//}

// じゃんけんの手を入力してもらうプロンプト欄を生成
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
var judge = winLose(user_hand, js_hand);
// 結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
// ランダムでじゃんけんの手を作成する関数
function getJShand(){
    var js_hand_num = Math.floor( Math.random() * 3 );
    var hand_name;
    if(js_hand_num == 0){
        hand_name = "グー";
    }else if(js_hand_num == 1){
        hand_name = "チョキ";
    }else if(js_hand_num == 2){
        hand_name = "パー";
    }
    return hand_name;
}
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
    var winLoseStr;
    if(user == "グー"){
        if(js == "グー"){
            winLoseStr = "あいこ";
        }else if(js == "チョキ"){
            winLoseStr = "勝ち";
        }else if(js == "パー"){
            winLoseStr = "負け";
        }
    }else if(user == "チョキ"){
        if(js == "グー"){
            winLoseStr = "負け";
        }else if(js == "チョキ"){
            winLoseStr = "あいこ";
        }else if(js == "パー"){
            winLoseStr = "勝ち";
        }
    }else if(user == "パー"){
        if(js == "グー"){
            winLoseStr = "勝ち";
        }else if(js == "チョキ"){
            winLoseStr = "負け";
        }else if(js == "パー"){
            winLoseStr = "あいこ";
        }
    }
    return winLoseStr;
}