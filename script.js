//your JS code here. If required.
function transformNumber(){
	const inputValue=document.getElementById('ip').value;
	if(!inputValue||isNaN(inputValue)){
		alert('Please enter a valid number');
		return;
	}
	let number=parseFloat(inputValue);
	new Promise((resolve)=>{
		setTimeout(()=>{
			document.getElementById('output').innerText=`Result: ${number}`;
			resolve(number);
		},2000);
	}).then((number)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				number*=2;
				document.getElementById('output').innerText=`Result: ${number}`;
				resolve(number);
			},2000);
		});
	}).then((number)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				number-=3;
				document.getElementById('output').innerText=`Result: ${number}`;
				resolve(number);
			},1000);
		});
	}).then((number)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				number/=2;
				document.getElementById('output').innerText=`Result: ${number}`;
				resolve(number);
		 },1000);
	   });
	}).then((number)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				number+=10;
				document.getElementById('output').innerText=`Final Result: ${number}`;
				resolve(number);
		 },1000);
	   });
	});		
}
document.getElementById('btn').addEventListener('click',transformNumber);