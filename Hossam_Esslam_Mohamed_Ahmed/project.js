        var myphoto=document.getElementById("myimg");
        var submt=document.getElementById("submit");
    		var alphpa=document.getElementById("alpha");
        var number=document.getElementById("numbers");
        var word=document.getElementById("word");
        var audio=document.getElementById("audio");
         var error=document.getElementById("error");
    		var ar=[1,2,3,4,5,6,7];
    		var alphpet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
              //var i=0;
         
        // var words=["Apple","Book","Dog","Snake","Zebra","Yak","Tiger","Car","Wheel","Rabbit","Lion","Egge","Mango","Quilt","Parrot","Nest","Vegetables","Onion","Fan","Kite","Insects","Jacket","Hen","Goat","Umberalla","Xray"];
var words=["Apple.jpg","Green.png","Pink.png","House.jpg","Blue.png","Blue.png","Black.png","Moon.jpg","Mauve.png","Maroon.png","Night.jpg","Ant.jpg","Brown.png","Red.jpg","Alligator.jpg","Dove.jpg","Zoo.jpg","Zip.jpg","Sun.jpg","Yellow.jpg","Yoyo.jpg","Wolf.jpg","Well.jpg","Xeron.jpg","Vine.jpg","WaterMelon.jpg","Table.jpg","Van.jpg","Unicorn.jpg","Umpire.jpg","Teapot.jpg","Tree.jpg","Sunflower.jpg","Spoon.jpg","Squirrel.jpg","Queen.jpg","Rocket.jpg","Quail.jpg","Rainbow.jpg","Ostritch.jpg","Pig.jpg","Pigeon.jpg","Needle.jpg","Ox.jpg","Nose.jpg","Kangroo.jpg","Monkey.jpg","Mug.jpg","Lamb.jpg","Lamp.jpg","Key.jpg","Jug.jpg","Igloo.jpg","Grapes.jpg","Horse.jpg","Elephant.jpg","Frog.jpg","Carrot.jpg","Book.jpg","Dog.jpg","Snake.jpg","Girl.jpg","Zebra.jpg","Yak.jpg","Tiger.jpg","Car.jpg","Wheel.jpg","Rabbit.jpg","Lion.jpg","Egg.jpg","Mango.jpg","Quilt.jpg","Parrot.jpg","Nest.jpg","Umberalla.jpg","Vegetables.jpg","Onion.jpg","Fan.jpg","Cat.jpg","Donkey.jpg","Banana.jpg","Eagle.jpg","Fat.jpg","Kite.jpg","Insects.jpg","Jacket.jpg","Hen.jpg","Goat.jpg","Umberalla.jpg","Xray.jpg"];
               console.log(words.length);
                var picture=document.getElementById("pict");
                var listspan=document.getElementsByTagName("span");
                
         function Object_Letter(Event_Target,Event_Type,Event_Time)
         {
          this.Event_Target=Event_Target;
          this.Event_Type=Event_Type;
          this.Event_Time=Event_Time;
          
         }
         
        function rand_words()
        {
          var n=Math.floor(Math.random()*90);
          return n;
    
        }
                
        function rand()
        {
          var n=Math.floor(Math.random()*26);
          return n;
    
        }
         
      window.addEventListener("load",function(e){
       
                 var p1=new Object_Letter();
                 //p1.Event_Target=submt.value;
                 p1.Event_Time=new Date();
                 p1.Event_Type=e.type;
                 var con=p1.Event_Time+"++"+p1.Event_Type;
                 //localStorage.setItem('submit',con);
                 if(localStorage.getItem("TheLoading")===null)
                 {
                   localStorage.setItem("TheLoading",con);
                 }
                 else
                 {
                
                   var a= new Array(localStorage.getItem("TheLoading"));
                   a.push(con);
                   localStorage.setItem("TheLoading",a);
                 }
       
       });
      
      
            window.addEventListener("unload",function(e){
       
                 var p1=new Object_Letter();
                 //p1.Event_Target=submt.value;
                 p1.Event_Time=new Date();
                 p1.Event_Type=e.type;
                 var con=p1.Event_Time+"++"+p1.Event_Type;
                 //localStorage.setItem('submit',con);
                 if(localStorage.getItem("The UnLoading")===null)
                 {
                   localStorage.setItem("The UnLoading",con);
                 }
                 else
                 {
                
                   var a= new Array(localStorage.getItem("The UnLoading"));
                   a.push(con);
                   localStorage.setItem("The UnLoading",a);
                 }
       
       });
         //
       submt.addEventListener("click",function(e){
                              
                                        //chek the entry number is valid or no.
                   word.style.display="none";
                   audio.style.display='block';
                   word.innerHTML="";                     
                   var nnn=number.value;
                   

                   if(nnn=="0"||nnn<0)
                   {
                    error.innerHTML="";
                    error.innerHTML="the number is not valid.";
                    alpha.innerHTML="";
                    myphoto.src="Project_Images"+"/"+"wellcom.jpg";
                   }
                   
                   if(nnn>26)
                   {
                    error.innerHTML="";
                    error.innerHTML="the number is out of range, the range : from 1 to 26 .";
                    alpha.innerHTML="";
                    myphoto.src="Project_Images"+"/"+"wellcom.jpg";
                   }
                   
                   if(nnn!==0 && nnn>0 && nnn<27)
                   { 
                    error.innerHTML="";
                    alpha.innerHTML="";
                    myphoto.src="Project_Images"+"/"+"wellcom.jpg";
                    var p1=new Object_Letter();
                    p1.Event_Target=submt.value;
                    p1.Event_Time=new Date();
                    p1.Event_Type=e.type;
                    var con=p1.Event_Target+"++"+p1.Event_Time+"++"+p1.Event_Type;
                    //localStorage.setItem('submit',con);
                    if(localStorage.getItem("submit")===null)
                    {
                      localStorage.setItem("submit",con);
                    }
                    else
                    {
                   
                      var a= new Array(localStorage.getItem("submit"));
                      a.push(con);
                      localStorage.setItem("submit",a);
                    }
                    GenerateArray_RoundNumbers(nnn);
                   }
                              
                              
                              });
           
          //////////////////////
          function GenerateArray_RoundNumbers(randnum)
          {
                   var arr= [];
                   var flage=false;
                   var NR=0;
                   
                  //the best algorithm for avoid repition.
                for(var i1=0;i1<randnum;i1++)
                  {
                    if(i1===0)
                    {
                     NR=rand();
                     //var old=NR;
                     arr[i1]=NR;
                    }
                    if(i1!==0)
                    {
                      while(flage===false)
                      {
                         NR=rand();
                        if(arr.includes(NR))
                        {
                          NR=rand();
                          
                        }
                        if(!(arr.includes(NR)))
                        {
                          flage=true;
                          arr[i1]=NR;
                        }
                        
                        
                      }
                      flage=false;
                    }

                  }
                    // I'll try avoid the repetition in numbers but it is weak.
                    //for(var arrnum=0;arrnum<arr.length;arrnum++)
                    //{
                    //  var arrnum2next=1;
                    //  for(;arrnum2next<arr.length;arrnum2next++)
                    //  {          
                    //    while(arr[arrnum2next]==arr[arrnum] && arrnum!=arrnum2next )
                    //    {
                    //         arr[arrnum2next]=rand(); 
                    //    }
                    //  }
                    //  arrnum2next+=1;
                    //}
                    //another algorithm for avoid repition.
                    
                    
              Create_SpansLetters(arr);
              
          }

        function Create_SpansLetters(arr)
        {
                   alpha.innerHTML="";
                    
                for(var i=0;i<arr.length;i++)
                {
                  var paragrap=document.createElement("span");
                  var text=document.createTextNode(alphpet[arr[i]]);
                  paragrap.appendChild(text);
                  alphpa.appendChild(paragrap);
                  
                }
          
               ShowPict_ByClickInSpan();
          
        }
             
             function ShowPict_ByClickInSpan()
             {
               
                 for(var j=0;j<listspan.length;j++)
                  {
                  listspan[j].addEventListener("click",function(e)
                     {
                      //var inp="Project_Images"+"/"+e.target.textContent+'.'+'jpg';
                      
                    var p1=new Object_Letter();
                    p1.Event_Target=e.target.textContent;
                    var letter=p1.Event_Target;
                    p1.Event_Time=new Date();
                    p1.Event_Type=e.type;
                    var con=p1.Event_Target+"++"+p1.Event_Time+"++"+p1.Event_Type;
                    // localStorage.setItem('LeterClick',con);
                    if(localStorage.getItem("span_Letter")===null)
                    {
                      localStorage.setItem("span_Letter",con);
                    }
                    else
                    {
                   
                      var a= new Array(localStorage.getItem("span_Letter"));
                      a.push(con);
                      localStorage.setItem("span_Letter",a);
                    }
                      word.innerHTML="";
                      
                      
                      //for one picture.
                   //belong to names of things   
                  //    for(var n=0;n<words.length;n++)
                  //    {
                  //      var st=words[n];
                  //      if(st[0]==p1.Event_Target)
                  //      {
                  //        word.style.display="Block";
                  //var _word=document.createElement("p");
                  //var _text=document.createTextNode(st);
                  //_word.appendChild(_text);
                  //word.appendChild(_word);
                  //      }
                  //      
                  //      
                  //    }
                     var flage=false;
                      //  var m=rand_words();
                     // var str=words[m].split('.');
                      //var st1=str[0];
                      var m="";
                      var str="";
                      var sr="";
                      while(flage===false)
                      {
                       m=rand_words();
                       str=words[m];
                       str=str.split('.');
                       st1=str[0];
                        
                        if(st1[0]===letter)
                      {
                        
                        sr=str[0];
                        flage=true;
                        
                      }
                      
                        
                      }
                      flage=false;
                      
                       //for one pictur.
                     word.style.display="Block";
                     var _word=document.createElement("p");
                     var _text=document.createTextNode(str[0]);
                     _word.appendChild(_text);
                     word.appendChild(_word);
                      //for one pictur.
                      
                    
                     // var inp="Project_Images"+"/"+p1.Event_Target+'.'+'jpg';
                     
                      //for more than one pictur.
                      audio.style.display='block';
                      var inp="Project_Images"+"/"+sr+'.'+str[1];
                      audio.src="Records/"+sr+'.'+'m4a';
                       displayPhoto(inp);
                     });
                   }
              
             }
             
             
              function displayPhoto(source)
              {
              
              //picture.innerHTML+="<img src="+sr+" width='150px' height='150px'>";
                myphoto.src=source;
                 //alert(sr);

              }
              
              setInterval(function(){localStorage.clear();},5000);