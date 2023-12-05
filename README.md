# Douri Mohamad Monif

To run Luhn code on terminal 
-> tsc file_name.ts
-> node file_name.js -c 5140256942783646 | cat -e
if the result is OK, the number is good if Ko the number is not good

you can replace the -c with -f to find the missing number and have a working number.
-> node luhn.js -f 192924593889831 | cat -e
resule 
6

To run the viegenere
-> cd vigenere
-> tsc viegenere.ts
-> node vigenere.js -c  => to crypt
OR
-> node vigenere.js -d  => to decrypt
