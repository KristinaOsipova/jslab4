	function bio()
	{
		var surname=document.getElementById('surname').value;
		var name=document.getElementById('name').value;
		var lastname=document.getElementById('lastname').value;			
		var yearofbirth=document.getElementById('yearofbirth').value;			
		var placeofbirth=document.getElementById('placeofbirth').value;
		var like=document.getElementById('like').value;
		var dislike=document.getElementById('dislike').value;
		
		var win=window.open("","","width=400,height=500");
		win.document.open();			
		win.document.write("<h1>О себе</h1><hr>");
			
		win.document.write("Я, " + surname + " " + name + " " + lastname +
		", родился в " + yearofbirth + " году в городе " + placeofbirth + ".<br><br>");
			
		win.document.write("Больше всего я люблю " + like + " и очень не люблю " + dislike + 
		". Было бы замечательно всю жизнь только " + like + ", но, к сожалению, приходится иногда и " + dislike + ".<br><br>");
			
		str ='<input type="button" value="Закрыть"'
		+'onClick="window.close();">';
		win.document.write(str);
		win.document.close();
	}
