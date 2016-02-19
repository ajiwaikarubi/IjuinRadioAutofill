// ==UserScript==
// @name        IjuinRadioAutofill
// @namespace   ajiwaikarubi
// @include     https://cgi.tbs.co.jp/ppshw/radio/ijuin/0260/enquete.do?q001=*
// @version     1
// @grant       none
// ==/UserScript==

/*
	伊集院光深夜の馬鹿力の投稿フォームに自動で入力するGreaseMonkeyです。
	都道府県のセレクトボックスを選択する方法がわかりません。
	だれか教えてください。
*/

var LastName = '';
var FirstName = '';
var Handle = '';
var Zip = '';
var Add1 = '';
var Add2 = '';
var Tel = '';
var Email = '';
var sex = ''; 


document.getElementsByName('lastname').item(0).value = LastName
document.getElementsByName('firstname').item(0).value = FirstName;
document.getElementsByName('handle').item(0).value = Handle;
document.getElementsByName('zip').item(0).value = Zip;
document.getElementsByName('add1').item(0).value = Add1;
document.getElementsByName('add2').item(0).value = Add2;
document.getElementsByName('tel').item(0).value = Tel;
document.getElementsByName('email').item(0).value = Email;
document.getElementsByName('gender') [sex].checked = 'true';

