var arr=[];
var n=parseInt(prompt("Enter the value"));

	
for (let i=0; i<n; i++){
	arr[i]=parseInt(prompt("Enter the" + (i+1) +" value"));
}

document.write("Given Array = "+arr+"<br><br>");

var b=[];
var c=0;

for (let i=0; i<arr.length;  i++){
	for (let j=i+1; j<arr.length; j++){
		if(arr[i]<arr[j]){
			c=arr[i];
			arr[i]=arr[j];
			arr[j]=c;
		}
	}
		b.push(arr[i]);
}

document.write("Decending order = "+b);