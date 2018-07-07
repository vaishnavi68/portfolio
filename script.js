/ declaring the needed var/
var modalbtn1 = document.getElementById('modalbtn1');
var modalbox1 = document.getElementById('modalbox1');
var closebtn1 = document.getElementById('closebtn1');

/to close the modal box on clicking closebtn/
function closeModal1()
{
	modalbox1.style.display='none';
}
/to open the modal box on clicking modalbtn/
function openModal1()
{
	modalbox1.style.display='block';
}
/function to close the modal box on clicking outside modal-content and inside modal box/
function outSideClick1(e)
{
	if(e.target==modalbox1)
	{
		modalbox1.style.display='none';		
	}
}
/adding event listeners/
modalbtn1.addEventListener('click',openModal1);
closebtn1.addEventListener('click',closeModal1);
window.addEventListener('click',outSideClick1);


/same as above for another modal box/
var modalbtn2 = document.getElementById('modalbtn2');
var modalbox2 = document.getElementById('modalbox2');
var closebtn2 = document.getElementById('closebtn2');

function closeModal2()
{
	modalbox2.style.display='none';
}

function openModal2()
{
	modalbox2.style.display='block';
}
function outSideClick2(e)
{
	if(e.target==modalbox2)
	{
		modalbox2.style.display='none';		
	}
}


modalbtn2.addEventListener('click',openModal2);
closebtn2.addEventListener('click',closeModal2);
window.addEventListener('click',outSideClick2);


/same as above for another modal box/
var modalbtn3 = document.getElementById('modalbtn3');
var modalbox3 = document.getElementById('modalbox3');
var closebtn3 = document.getElementById('closebtn3');

function closeModal3()
{
	modalbox3.style.display='none';
}

function openModal3()
{
	modalbox3.style.display='block';
}
function outSideClick3(e)
{
	if(e.target==modalbox3)
	{
		modalbox3.style.display='none';		
	}
}


modalbtn3.addEventListener('click',openModal3);
closebtn3.addEventListener('click',closeModal3);
window.addEventListener('click',outSideClick3);