var arr=[100,24,32,4,58]
var temp=[]
function max(arr)
{
    for(i=0;i<arr.length;i++)
    {
        
        while(arr[i]>arr[i+1])
        {    
             return arr[i]
        }
    }
    console.log(arr)
}
max(arr)