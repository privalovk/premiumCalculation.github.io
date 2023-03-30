
	function calculate()
	{
		var ratio1 = floor(getElementById("kk").value/getElementById("kkPlan").value);
		var ratio2 = floor(getElementById("dvd").value/getElementById("dvdPlan").value);
		var ratioWork = getElementById("working").value;
		var ratioStable = getElementById("trend").value;
		var kk = floor(getElementById("kk").value);
		var kkPlan = floor(getElementById("kkPlan").value);
		var dvd = floor(getElementById("dvd").value);
		var dvdPlan = floor(getElementById("dvdPlan").value);
		var dvd500 = floor(getElementById("dvd500").value);
		var bg1 = floor(getElementById("bg1").value);
		var bg2 = floor(getElementById("bg2").value);
		var trend = floor(getElementById("trend").value);
		var working = floor(getElementById("working").value);
		var fine = floor(getElementById("fine").value);
		
		var r1, r2, rt, rw;
		
		if(ratio1 >= 1.1)
			r1 = 1.2;
		else if (ratio1 >= 1)
			r1 = 1;
		else if (ratio1 >= 0.95)
			r1 = 0.9;
		else if (ratio1 >= 0.8)
			r1 = 0.7;
		else
			r1 = 0.5;
		
		if(ratio2 >= 1)
			r2 = 1;
		else if (ratio2 >= 0.95)
			r2 = 0.9;
		else if (ratio2 >= 0.8)
			r2 = 0.7;
		else
			r2 = 0.5;
		
		if(trend >= 80)
			rt = 1.1;
		else
			rt = 0.9;
		
		if(working >= 80)
			rw = 1;
		else
			rw = 0.8;
		var sum = (((kk - 22) * 500 * rw) + (dvd500 * 250) + (bg1 * 2500) + (bg2 * 100) - fine) * r1 * r2 * rt * 0.87;
		alert(sum);
	}
