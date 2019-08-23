function calc ()
	{
	    var numb1 = prompt ("Premier chiffre");
	    var operator = prompt("Quel opérateur ? + - * /");
	    var numb2 = prompt("Second chiffre");
	    var total;

	    if (numb1 == "" || numb2 == "" || operator == "" )
			{
			    return alert ("T'es vraiment nul en Math");
			}

	    numb1 = parseInt (numb1, 10);
	    numb2 = parseInt (numb2, 10);

	    switch (operator)
			{
				case '+':
				total = numb1 + numb2;
				break;
				case '-':
				total = numb1 - numb2;
				break;
				case '*':
				total = numb1 * numb2;
				break;
				case '/':
				total = numb1 / numb2;
				break;
				default:
				total = "Opérateur non reconnu ! Bordel, je les avais marqués en plus";
				break;
			}

		alert (total);

	}

calc ();