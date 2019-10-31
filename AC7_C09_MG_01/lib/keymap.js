﻿//----------------------------------------------------------------------------------------------------
//	lib/js/util.js
//----------------------------------------------------------------------------------------------------
window.KEYMAP = (function() {
//----------------------------------------------------------------------------------------------------
//	namespace.
//----------------------------------------------------------------------------------------------------
function KEYMAP() {}	
	
KEYMAP.KeyCodeDefault = {				
	"8" 	: "backspace",
	"46" 	: "delete",
	"x100"	: "Clr"
};
	
KEYMAP.KeyCodeNum = {
	"48"	: "0", 
	"49"	: "1", 
	"50"	: "2", 
	"51"	: "3",
	"52"	: "4",
	"53"	: "5",
	"54"	: "6",
	"55"	: "7",
	"56"	: "8",
	"57"	: "9",
	"96"	: "0", //numpad
	"97"	: "1", 
	"98"	: "2", 
	"99"	: "3",
	"100"	: "4",
	"101"	: "5",
	"102"	: "6",
	"103"	: "7",
	"104"	: "8",
	"105"	: "9",
	"190"	: ".",
	"110"	: "."
};

KEYMAP.KeyCodeAlp = {	
	"65"	: "a",
	"66"	: "b",
	"67"	: "c",
	"68"	: "d",
	"69"	: "e",
	"70"	: "f",
	"71"	: "g",
	"72"	: "h",
	"73"	: "i",
	"74"	: "j",
	"75"	: "k",
	"76"	: "l",
	"77"	: "m",
	"78"	: "n",
	"79"	: "o",
	"80"	: "p",
	"81"	: "q",
	"82"	: "r",
	"83"	: "s",
	"84"	: "t",
	"85"	: "u",
	"86"	: "v",
	"87"	: "w",
	"88"	: "x",
	"89"	: "y",
	"90"	: "z"		
};

KEYMAP.KeyCodeCap = {
	"u65"	: "A",
	"u66"	: "B",
	"u67"	: "C",
	"u68"	: "D",
	"u69"	: "E",
	"u70"	: "F",
	"u71"	: "G",
	"u72"	: "H",
	"u73"	: "I",
	"u74"	: "J",
	"u75"	: "K",
	"u76"	: "L",
	"u77"	: "M",
	"u78"	: "N",
	"u79"	: "O",
	"u80"	: "P",
	"u81"	: "Q",
	"u82"	: "R",
	"u83"	: "S",
	"u84"	: "T",
	"u85"	: "U",
	"u86"	: "V",
	"u87"	: "W",
	"u88"	: "X",
	"u89"	: "Y",
	"u90"	: "Z"
};

KEYMAP.KeyCodeSym = {
	"106"	: "×",
	"107"	: "+",
	"u187"	: "+",
	"109"	: "-",
	"189"	: "-",
	"x101"	: "–",
	"x102"	: "×",
	"111"	: "÷",
	"191"	: "÷",
	"x103"	: "÷",
	"187"	: "=",
	"u190"	: ">",
	"u188"	: "<"
};

KEYMAP.KeyAlpCommon = {	
	"13"	: "\n",
	"32"	: " ",
	"u48"	: ")",
	"u49"	: "!",
	"u50"	: "@",		
	"u51"	: "#",		
	"u52"	: "$",		
	"u53"	: "%",		
	"u54"	: "^",		
	"u55"	: "&",		
	"u56"	: "*",		
	"u57"	: "(",						
	"186"	: ";",
	"u186"	: ":",
	"187"	: "=",
	"u187"	: "+",
	"188"	: ",",
	"u188"	: "<",
	"189"	: "-",	
	"u189"	: "_",		
	"190"	: ".",
	"u190"	: ">",
	"191"	: "/",
	"u191"	: "?",
	"192"	: "`",	
	"u192"	: "~",
	"219"	: "[",
	"u219"	: "{",
	"220"	: "\\",
	"u220"	: "|",						
	"221"	: "]",		
	"u221"	: "}",		
	"222"	: "'",				
	"u222"	: '"',	
	"x101"	: "–",
	"x102"	: "×",
	"x103"	: "÷",
	//"x104"	: "÷",
	"x105"	: "￠",
	"x106"	: "°",
	"x107"	: "≠",
	"x108"	: "∠",
	"x109"	: "┴",
	"x110"	: "║"	
};	

//----------------------------------------------------------------------------------------------------
return KEYMAP;
})();