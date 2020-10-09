function Mudarestado() 
{
        var display = document.getElementById("menum").style.display;
        if(display == "block"){
            document.getElementById("menum").style.display = 'none';
        }
		else{
            document.getElementById("menum").style.display = 'block';
			document.getElementById("divbusca").style.display = 'none';
		}
}

function buscar() 
{
        var display = document.getElementById("divbusca").style.display;
        if(display == "block"){
            document.getElementById("divbusca").style.display = 'none';
        }
		else{
            document.getElementById("divbusca").style.display = 'block';
			document.getElementById("menum").style.display = 'none';
		}
}


 