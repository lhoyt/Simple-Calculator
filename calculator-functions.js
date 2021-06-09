function validateName() {
	var name = document.getElementById( "full" );

	if ( name.value == null || name.value == "" ) {
		window.alert( "There was an error in the name field" );
	} else if( name.value.length > 10 ) {
		window.alert( "Name is to long." );

		document.getElementById( "full" ). value = "";
	} else {
		window.alert( "The name field is good: " + name.value );
	}
}

function validateNum() {
	var number = document.getElementById( "num1" );
	var number = document.getElementById( "num2" );

	if ( isNaN( number.value ) ) {
		window.alert( "Must be a number." );
	} else {
		window.alert( "Correct there are no errors." );
	}
}

function clearIt() {
	document.getElementById( "full" ). value = "";
	document.getElementById( "num1" ). value = "";
	document.getElementById( "num2" ). value = "";
	document.getElementById( "answer" ). value = "";
}

function addIt() {
	var theNum1 = document.getElementById( "num1" );
	var theNum2 = document.getElementById( "num2" );

	theResult = theNum1.value + theNum2.value;

	document.getElementById( "answer" ).value = theResult;
}

function multiplyIt() {

	var theNum1 = document.getElementById( "num1" );
	var theNum2 = document.getElementById( "num2" );

	theResult = theNum1.value * theNum2.value;

	document.getElementById( "answer" ).value = theResult;
}

function subtractIt() {
	var theNum1 = document.getElementById( "num1" );
	var theNum2 = document.getElementById( "num2" );

	theResult = theNum1.value - theNum2.value;

	document.getElementById( "answer" ).value = theResult;
}

function divideIt() {
	var theNum1 = document.getElementById( "num1" );
	var theNum2 = document.getElementById( "num2" );

	theResult = theNum1.value / theNum2.value;

	document.getElementById( "answer" ).value = theResult;
}

function addIt () {
	var theNum1 = document.getElementById("num1");
	var theNum2 = document.getElementById("num2");

	theResult = theNum1.value + theNum2.value;

	document.getElementById( "answer" ).value = theResult;
}
