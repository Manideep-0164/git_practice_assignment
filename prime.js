//Program to find the prime number
let a=17;
let count=0;
for(let i=1; i<=a; i++)
{
if(a%i==0)
{
count++;
}
} if(count==2)
{
console.log("Yes");
}else{
console.log("No");
}
