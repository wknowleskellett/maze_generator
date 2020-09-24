all: getChars

getChars: getChars.c
	gcc -o getChars getChars.c
