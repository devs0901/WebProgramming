
function validateName(){
	if(laundryForm.name.value.length==0){
		document.getElementById('checkerName').innerHTML="*name required";
	}
	else{document.getElementById('checkerName').innerHTML="&#10004";}
}

function validateAddress(){
	if(laundryForm.addressStreet.value.length!=0){
		if(laundryForm.addressTown.value.length!=0){
			if(laundryForm.addressCity.value.length!=0){
				if(laundryForm.addressPostal.value.length!=0){
					document.getElementById('checkerAddress').innerHTML="&#10004";
				}
				else{
					document.getElementById('checkerAddress').innerHTML="*address required";
				}
			}
			else{
				document.getElementById('checkerAddress').innerHTML="*address required";
			}
		}
		else{
			document.getElementById('checkerAddress').innerHTML="*address required";
		}
	}
	else{
		document.getElementById('checkerAddress').innerHTML="*address required";
	}
}

function validateEmail(){
	if(laundryForm.email.value.length==0){
		document.getElementById('checkerEmail').innerHTML="*email required";
	}
	else{document.getElementById('checkerEmail').innerHTML="&#10004";}
}

function validateCellphone(){
	if(laundryForm.cellphone.value.length==0){
		document.getElementById('checkerCellphone').innerHTML="*cellphone number required";
	}
	else{document.getElementById('checkerCellphone').innerHTML="&#10004";}
}

function validateCollection() {
	var valueColDate = document.getElementById('collection').value;
	if(!Date.parse(valueColDate)){
		document.getElementById('checkerCollection').innerHTML="*date required";
	}
	else{document.getElementById('checkerCollection').innerHTML="&#10004";}
}

function validateDeliver() {
	var valueDelDate = document.getElementById('deliver').value;
	if(!Date.parse(valueDelDate)){
		document.getElementById('checkerDeliver').innerHTML="*date required";
	}
	else{document.getElementById('checkerDeliver').innerHTML="&#10004";}
}

function getShirtLaundryTotal(){

	var s1 = (document.getElementById("pr250").value);
		if(s1==""){s1=0;}
	var s2 = (document.getElementById("pr220").value);
		if(s2==""){s2=0;}
	var s3 = (document.getElementById("pr200").value);
		if(s3==""){s3=0;}
	var s4 = (document.getElementById("pr460").value);
		if(s4==""){s4=0;}
	var s5 = (document.getElementById("pr250one").value);
		if(s5==""){s5=0;}
	var s6 = (document.getElementById("pr1465").value);
		if(s6==""){s6=0;}
	var s7 = (document.getElementById("pr1820").value);
		if(s7==""){s7=0;}
	var s8 = (document.getElementById("pr1820one").value);
		if(s8==""){s8=0;}
	var s9 = (document.getElementById("pr615").value);
		if(s9==""){s9=0;}
	var s10 = (document.getElementById("pr670").value);
		if(s10==""){s10=0;}
	var s11 = (document.getElementById("pr810").value);
		if(s11==""){s11=0;}

	var st1 = parseInt(s1)*2.50;
	var st2 = parseInt(s2)*2.20;
	var st3 = parseInt(s3)*2.00;
	var st4 = parseInt(s4)*4.60;
	var st5 = parseInt(s5)*2.50;
	var st6 = parseInt(s6)*14.65;
	var st7 = parseInt(s7)*18.20;
	var st8 = parseInt(s8)*18.20;
	var st9 = parseInt(s9)*6.15;
	var st10 = parseInt(s10)*6.70;
	var st11 = parseInt(s11)*8.10;
	
	var shirtLaundryTotal = st1+st2+st3+st4+st5+st6+st7+st8+st9+st10+st11;

	return shirtLaundryTotal;
}

function getSheetsTotal(){

	var t1 = (document.getElementById("pr600").value);
			if(t1==""){t1=0;}
	var t2 = (document.getElementById("pr125").value);
			if(t2==""){t2=0;}
	var t3 = (document.getElementById("pr400").value);
			if(t3==""){t3=0;}
	var t4 = (document.getElementById("pr600one").value);
			if(t4==""){t4=0;}
	var t5 = (document.getElementById("pr700").value);
			if(t5==""){t5=0;}
	var t6 = (document.getElementById("pr800").value);
			if(t6==""){t6=0;}
	var t7 = (document.getElementById("pr900").value);
			if(t7==""){t7=0;}
	var t8 = (document.getElementById("pr500").value);
			if(t8==""){t8=0;}
	var t9 = (document.getElementById("pr1300").value);
			if(t9==""){t9=0;}
	var t10 = (document.getElementById("pr1000").value);
			if(t10==""){t10=0;}
	var t11 = (document.getElementById("pr1200").value);
			if(t11==""){t11=0;}
	var t12 = (document.getElementById("pr1400").value);
			if(t12==""){t12=0;}
	var t13 = (document.getElementById("pr1600").value);
			if(t13==""){t13=0;}
	var t14 = (document.getElementById("pr1000one").value);
			if(t14==""){t14=0;}

	var tt1 = parseInt (t1)*6.00;
	var tt2 = parseInt (t2)*1.25;
	var tt3 = parseInt (t3)*4.00;
	var tt4 = parseInt (t4)*6.00;
	var tt5 = parseInt (t5)*7.00;
	var tt6 = parseInt (t6)*8.00;
	var tt7 = parseInt (t7)*9.00;
	var tt8 = parseInt (t8)*5.00;
	var tt9 = parseInt (t9)*13.00;
	var tt10 = parseInt (t10)*10.00;
	var tt11 = parseInt (t11)*12.00;
	var tt12 = parseInt (t12)*14.00;
	var tt13 = parseInt (t13)*16.00;
	var tt14 = parseInt (t14)*10.00;

	var sheetsTotal = tt1+tt2+tt3+tt4+tt5+tt6+tt7+tt8+tt9+tt10+tt11+tt12+tt13+tt14;
		return sheetsTotal;
}

function getServiceWashTotal(){

	var u = (document.getElementById("pr300").value);
		if(u==""){u=0;}

	var ut = parseInt (u)*3.00;

	var seviceTotal = ut;

	return seviceTotal;
}

function getClothingTotal(){

	var v1 = (document.getElementById("pr635").value);
		if(v1==""){v1=0;}
	var v2 = (document.getElementById("pr560").value);
		if(v2==""){v2=0;}
	var v3 = (document.getElementById("pr1010").value);
		if(v3==""){v3=0;}
	var v4 = (document.getElementById("pr1400one").value);
		if(v4==""){v4=0;}
	var v5 = (document.getElementById("pr810one").value);
		if(v5==""){v5=0;}
	var v6 = (document.getElementById("pr1125").value);
		if(v6==""){v6=0;}
	var v7 = (document.getElementById("pr1570").value);
		if(v7==""){v7=0;}
	var v8 = (document.getElementById("pr730").value);
		if(v8==""){v8=0;}
	var v9 = (document.getElementById("pr880").value);
		if(v9==""){v9=0;}
	var v10 = (document.getElementById("pr1010one").value);
		if(v10==""){v10=0;}
	var v11 = (document.getElementById("pr1200one").value);
		if(v11==""){v11=0;}
	var v12 = (document.getElementById("pr1500").value);
		if(v12==""){v12=0;}
	var v13 = (document.getElementById("pr1315").value);
		if(v13==""){v13=0;}
	var v14 = (document.getElementById("pr1520").value);
		if(v14==""){v14=0;}
	var v15 = (document.getElementById("pr1360").value);
		if(v15==""){v15=0;}
	var v16 = (document.getElementById("pr1590").value);
		if(v16==""){v16=0;}
	var v17 = (document.getElementById("pr2000").value);
		if(v17==""){v17=0;}
	var v18 = (document.getElementById("pr700one").value);
		if(v18==""){v18=0;}

	var vt1 = parseInt (v1)*6.35;
	var vt2 = parseInt (v2)*5.60;
	var vt3 = parseInt (v3)*10.10;
	var vt4 = parseInt (v4)*14.00;
	var vt5 = parseInt (v5)*8.10;
	var vt6 = parseInt (v6)*11.25;
	var vt7 = parseInt (v7)*15.70;
	var vt8 = parseInt (v8)*7.30;
	var vt9 = parseInt (v9)*8.80;
	var vt10 = parseInt (v10)*10.10;
	var vt11 = parseInt (v11)*12.00;
	var vt12 = parseInt (v12)*15.00;
	var vt13 = parseInt (v13)*13.15;
	var vt14 = parseInt (v14)*15.20;
	var vt15 = parseInt (v15)*13.60;
	var vt16 = parseInt (v16)*15.90;
	var vt17 = parseInt (v17)*20.00;
	var vt18 = parseInt (v18)*7.00;

	var clothingTotal = vt1+vt2+vt3+vt4+vt5+vt6+vt7+vt8+vt9+vt10+vt11+vt12+vt13+vt14+vt15+vt16+vt17+vt18;

	return clothingTotal;
}

function getOthersTotal(){

	var w1 = (document.getElementById("pr130").value);
		if(w1==""){w1=0;}
	var w2 = (document.getElementById("pr180").value);
		if(w2==""){w2=0;}
	var w3 = (document.getElementById("pr220one").value);
		if(w3==""){w3=0;}
	var w4 = (document.getElementById("pr250one").value);
		if(w4==""){w4=0;}
	var w5 = (document.getElementById("pr80").value);
		if(w5==""){w5=0;}
	var w6 = (document.getElementById("pr90").value);
		if(w6==""){w6=0;}
	var w7 = (document.getElementById("pr500one").value);
		if(w7==""){w7=0;}
	var w8 = (document.getElementById("pr70").value);
		if(w8==""){w8=0;}
	var w9 = (document.getElementById("pr350").value);
		if(w9==""){w9=0;}
	var w10 = (document.getElementById("pr350one").value);
		if(w10==""){w10=0;}
	var w11 = (document.getElementById("pr350two").value);
		if(w11==""){w11=0;}
	var w12 = (document.getElementById("pr700two").value);
		if(w12==""){w12=0;}
	var w13 = (document.getElementById("pr60").value);
		if(w13==""){w13=0;}
	var w14 = (document.getElementById("pr100").value);
		if(w14==""){w14=0;}

	var wt1 = parseInt (w1)*1.30;
	var wt2 = parseInt (w2)*2.20;
	var wt3 = parseInt (w3)*2.50;
	var wt4 = parseInt (w4)*0.80;
	var wt5 = parseInt (w5)*0.90;
	var wt6 = parseInt (w6)*5.00;
	var wt7 = parseInt (w7)*0.70;
	var wt8 = parseInt (w8)*3.50;
	var wt9 = parseInt (w9)*3.50;
	var wt10 = parseInt (w10)*3.50;
	var wt11 = parseInt (w11)*3.50;
	var wt12 = parseInt (w12)*7.00;
	var wt13 = parseInt (w13)*0.60;
	var wt14 = parseInt (w14)*1.00;

	var othersTotal=wt1+wt2+wt3+wt4+wt5+wt6+wt7+wt8+wt9+wt10+wt11+wt12+wt13+wt14;

	return othersTotal;
}

function printReceipt(){

	if(laundryForm.name.value.length!=0){
		if(laundryForm.addressStreet.value.length!=0){
			if(laundryForm.addressTown.value.length!=0){
				if(laundryForm.addressCity.value.length!=0){
					if(laundryForm.addressPostal.value.length!=0){
						if(laundryForm.email.value.length!=0){
							if(laundryForm.cellphone.value.length!=0){
								var total = (getShirtLaundryTotal() + getSheetsTotal() + getServiceWashTotal() + getClothingTotal()+ getOthersTotal());
								document.getElementById("totalBeforeTax").innerHTML = "$" + total.toFixed(2);
								var tax = total*0.13;
								document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
								var totalWithTax = total + tax;
								document.getElementById("totalAfterTax").innerHTML = "$" + totalWithTax.toFixed(2);
							}
							else{alert("Incomplete form, please finish filling out customer's info to proceed");}
						}
						else{alert("Incomplete form, please finish filling out customer's info to proceed");}
					}
					else{alert("Incomplete Form, please finish filling out customer's info to proceed");}
				}
				else{alert("Incomplete Form, please finish filling out customer's info to proceed");}
			}
			else{alert("Incomplete Form, please finish filling out customer's info to proceed");}
		}
		else{alert("Incomplete Form, please finish filling out customer's info to proceed");}
	}
	else{alert("Incomplete Form, please finish filling out customer's info to proceed");}



	
}