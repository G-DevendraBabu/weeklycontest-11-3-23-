//--TO write functions to implement school sports day function
//day have 4 colors=["red,"yellow,"blue","green"]




//--- According to the flow I have called OpeningCeremony() , inside it I passed Race100M() function 
//---Inside OperatioCeremony function I created a score object which stores the values of the colours and Iam passing that "score" and a callback function to Race100m
//--inside Race100m I generated random between 10 to 15 and assigned to the colours and added "50" to the least poits colour and added 25 to the second least colour after performing the operations I have updated the values of the score nad passed it to score1 with a callback for Longjump()
//Inside Longjump() function by taking score1 and random selection of colours takes place and that colour will be given 150 to the present score and the scores of colours are updated according to it.and after this I called callback with highjump &score2
//inside Highjump() function by taking the input from the prompt that which colour has more points if the color is present in the object then that color points will increase by 100 after this we are just passing score3 to the callback
//inside Award ceremony we will be doing the  



function OperationCeromony(callback) {
    let score={red:0,blue:0,green:0,yellow:0};

    setTimeout(()=>{
        console.log("let the games begin");
    },1000)

    //-- setting timeout with 3 seconds for race100()
    setTimeout(()=>{
        callback(score,LongJump);
    },3000)

    console.log("score  after finishing operating ceremony section " , score);
    
}


function Race100M(score,callback)
{
    let score1={...score};
    score1.red=Random_btw_10_15(10,15);
    score1.blue=Random_btw_10_15(10,15);
    score1.green=Random_btw_10_15(10,15);
    score1.yellow=Random_btw_10_15(10,15);
    

    //storing the values colurs in an array to sorting and finding the minimum value
    let arr=[score1.red,score1.blue,score1.green,score1.yellow];
    let res=0;
   
    //moving the sorted elements to another array
    let arr1=arr.sort();
    

    //storing the minimum value of the array
    let min_value=arr1[0];

    // console.log("minimum value = "  , min_value);

    let arr2=[];

    // running a for loop to push the elements into the new array except the least score value tdoing this to get the second least score of a colour
    for(let i=0;i<arr.length;i++)
    {
        if(min_value !=arr[i])
        {
           
            arr2.push(arr[i])
        }
     
    }
    
    let arr3=arr2.sort();
    let second_min=arr3[0];
    // console.log("secong mi9nimum==" , second_min);

    // console.log("arr2" , arr2);
    

    //---------------adding 50 points to the minimum element in the score
    if(score1.red==min_value)
    {     score1.red=score1.red  +50 }

    if(score1.blue==min_value)
    { score1.blue=score1.blue  +50 }
   
    if(score1.green==min_value)
    { score1.green=score1.green  +50 ; }

    if(score1.yellow==min_value)
    { score1.yellow=score1.yellow  +50 }
        
    
    //---------------Adding 25 points to the second least element in the score
    if(score1.red==second_min)
    {     score1.red=score1.red  + 25 }

    if(score1.blue==second_min)
    { score1.blue=score1.blue  + 25 }
   
    if(score1.green==second_min)
    { score1.green=score1.green  + 25 }

    if(score1.yellow==second_min)
    { score1.yellow=score1.yellow  + 25 }
        
    console.log("score after finishing Race100m function " , score1);


    //--------doing this stuff to get the topper among colours untill this round
    let sortable=[];
    for (const clr in score1) {
        
        sortable.push([clr,score1[clr]]);
    }

    sortable.sort(function(a,b){
        return a[1] - b[1];
    })


    for (var key in sortable[3]){
        console.log( sortable[3][key] + " is leading  with " +  sortable[3][1] + " score in Race100M");
        break;
    }

    //setting a timeout for the highjump function
    setTimeout(()=>{
        callback(score1,HighJump);
    },2000)

}

function LongJump(score1,callback)
{
    
    let score2={...score1};

    //----------generating a random number and according to that we are adding 150 points to the colour's score
    let random_indx=Math.floor(Math.random()*4)
    // console.log("random hike=" ,random_indx);
    if(random_indx==0)
    {
        score2.red =score2.red + 150;
    }
    else if(random_indx==1)
    {
        score2.blue =score2.blue + 150;
    }
    else if(random_indx==2)
    {
        score2.green =score2.green + 150;
    }
    else if(random_indx==3)
    {
        score2.yellow =score2.yellow + 150;
    }

    console.log("score after finishing LongJump() function " , score2);
    

    //--------doing this stuff to get the topper among colours untill this round

    let sortable=[];
    for (const clr in score2) {
        
        sortable.push([clr,score2[clr]]);
    }

    sortable.sort(function(a,b){
        return a[1] - b[1];
    })


    for (var key in sortable[3]){
        console.log( sortable[3][key] + " is leading with " +  sortable[3][1] + " score in LongJump");
        break;
    }

   

    callback(score2,AwardCeremony)
    

}

function HighJump(score2,callback) {
    
    let score3={...score2};

    //--------------------------Taking input from the prompt and according to that we are performing the if else statements
    let inp=prompt("What colour secured the highest jump")
    if (inp =="red" || inp =="blue" || inp =="green" || inp =="yellow")
    {
        if(inp=="red")
        {
            score3.red=score3.red+100;
        }
        else if(inp=="green")
        {
            score3.green=score3.green+100;
        }
        else if(inp=="blue")
        {
            score3.blue=score3.blue + 100;
        }
        else if(inp=="yellow")
        {
            score3.yellow=score3.yelllow +100;
        }
        
    }
    else
    {
        console.log("Event was cancelled");
    }
    

    console.log("score after finishing HighJump() function " , score3);
    

    //--------doing this stuff to get the topper among colours untill this round
    let sortable=[];
    for (const clr in score3) {
        
        sortable.push([clr,score3[clr]]);
    }

    sortable.sort(function(a,b){
        return a[1] - b[1];
    })


    for (var key in sortable[3]){
        console.log( sortable[3][key] + " is leading with " +  sortable[3][1] + " score in High Jump");
        break;
    }

    
    callback(score3)
    

}

function AwardCeremony(score3)
{
    let score4={...score3};

    let sortable=[];
    for (const clr in score4) {
        
        sortable.push([clr,score4[clr]]);
    }

    sortable.sort(function(a,b){
        return a[1] - b[1];
    })


    // console.log(score4);

    // console.log(sortable);
    for (var key in sortable[3]){
        console.log( sortable[3][key] + " is the first with " +  sortable[3][1] + " score");
        break;
    }

    
    for (var key in sortable[2]){
        console.log( sortable[2][key] + " is the second with " +  sortable[2][1] + " score");
        break;
    }

    
    for (var key in sortable[1]){
        console.log( sortable[1][key] + " is the third with " +  sortable[1][1] + " score");
        break;
    }

}



//-starting of the code here is the first function which takes control whole process
OperationCeromony(Race100M);

//------random function to generate numbers betwwen 10 and 15.
function Random_btw_10_15(min, max) {
    let n= Math.random() * (max - min) + min;
    n=parseInt(n);
    return n;
  }

