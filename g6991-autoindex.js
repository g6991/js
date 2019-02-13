
<!--

function a_infographic(id01,id02,ww,hh,ifloat,iww,ihh,fname,fsize,cc,bb,oth) {
var lh=fsize+10; 
var data=httpGet(fname);
var weblink=data.split('[more]'); 
for (i=0;i<=weblink.length-1;i++){
var uu=weblink[i].substring(weblink[i].indexOf("[url]")+5,weblink[i].indexOf("[/url]") ); 
var tt=weblink[i].substring(weblink[i].indexOf("[txt]")+5,weblink[i].indexOf("[/txt]") ); 
var ii=weblink[i].substring(weblink[i].indexOf("[img]")+5,weblink[i].indexOf("[/img]") ); 
switch (i) {
case 0:
 a_button_img (id01,id02,800,200,ii,'left',400,200,uu,tt,fsize,cc,bb,'margin:30px 0px 0px 60px; padding:10px;');  
　break;
case 1:
 a_button_img(id01,id02,400,100,ii,'left',120,100,uu,tt,fsize,'white','blue','margin:10px 0px 0px 60px; ');  
　break;
case 2:
 a_button_img(id01,id02,405,100,ii,'left',120,100,uu,tt,fsize,'white','red','margin:10px 0px 0px 10px; ');  
　break;
default:
 a_button_img(id01,id02,ww,hh,ii,ifloat,iww,ihh,uu,tt,fsize,'black','',oth); 
}

 }     }

function a_autoindex(id01,id02,ww,hh,fname,fsize,cc,bb,oth) {
var lh=fsize+10;
var data=httpGet(fname);
var weblink=data.split('[more]'); 
for (i=1;i<=weblink.length-1;i++){
var uu=weblink[i].substring(weblink[i].indexOf("[url]")+5,weblink[i].indexOf("[/url]") ); 
var tt=weblink[i].substring(weblink[i].indexOf("[txt]")+5,weblink[i].indexOf("[/txt]") ); 
var b2='<div style="width:30px; height:30px; float:left; padding:5px; border:1px solid black; border-radius:7px ; font-size:30px; text-align:center; line-height:46px; color:white; background:blue; margin:0px 7px 0px 0px; "><b> '+i+' </b></div><div  style=" margin:7px; float:top;"> '+tt+' </div>';
var oth2=oth + 'cursor:pointer; font-size:'+fsize+'; letter-spacing:2px; line-height:'+lh+'px ; " onclick="javascript:includejs(\''+uu+'\');   '; 
a_div(id01,id02,ww,hh,b2,fsize,cc,bb,oth2); 
 }    }

function more_fbl(id01,id02,ww,hh,fname,fsize,cc,bb) {
var lh=fsize+10;  
var data=httpGet(fname);
var webpage=data.split('[more]'); 
var ii=webpage[0].substring(webpage[0].indexOf("[icon]")+6,webpage[0].indexOf("[/icon]") ); 
var un=webpage[0].substring(webpage[0].indexOf("[name]")+6,webpage[0].indexOf("[/name]") ); 
var oth2='font-size:'+fsize+'px; letter-spacing:2px; line-height:'+lh+'px; margin:20px; padding:20px; border:3px solid #d9d9d9;  border-radius:10px; ' ; 
for (i=1;i<=webpage.length-1;i++){
var b2='<img src= ' + ii + ' width=70px margin=10px align=top ><b> ' + un + ' </b> <pre> ' + webpage[i] + ' </pre>'; 
a_div(id01,id02,ww,hh,b2,fsize,cc,bb,oth2); 
  }     }

function more_search(id01,id02,ww,hh,thistyp,fname,fsize,cc,bb,oth) {
var lh=fsize+10; var j=0;
var data=httpGet(fname);
var weblink=data.split('[more]'); 
var arr={ ii:[],  };
for (i=0;i<=weblink.length-1;i++){
var typ=weblink[i].substring(weblink[i].indexOf("[typ]")+5,weblink[i].indexOf("[/typ]") ); 
if (typ==thistyp) {  arr.ii.push(i); } }
for (z=0;z<=arr.ii.length-1;z++){
var i=arr.ii[z]; var j=arr.ii.length-z;
var uu=weblink[i].substring(weblink[i].indexOf("[url]")+5,weblink[i].indexOf("[/url]") ); 
var tt=weblink[i].substring(weblink[i].indexOf("[txt]")+5,weblink[i].indexOf("[/txt]") ); 
var b2='<div style="width:45px; height:32px; float:left; padding:5px; border:1px solid black; border-radius:7px ; font-size:30px; text-align:center; line-height:46px; color:white; background:blue; margin:0px 7px 0px 0px; "><b> '+j+' </b></div><div  style=" margin:7px; float:top;"> '+tt+' </div>';
var oth2=oth + 'cursor:pointer; font-size:'+fsize+'; letter-spacing:2px; line-height:'+lh+'px ; " onclick="javascript:window.open(\''+uu+'\',\'_self\');   '; 
a_div(id01,id02,ww,hh,b2,fsize,cc,bb,oth2); 
  }    }

function typ_search(id01,id02,ww,hh,fname,fsize,cc,bb,oth) {
var lh=fsize+10; var thisfile=fname;
var ree=thisfile.replace('typ','');
var data=httpGet(fname);
var weblink=data.split('[more]'); 
for (i=1;i<=weblink.length-1;i++){
var typ=weblink[i].substring(weblink[i].indexOf("[typ]")+5,weblink[i].indexOf("[/typ]") ); 
var oth2=oth + 'border:3px solid black;  border-radius:10px;  cursor:pointer; font-size:'+fsize+'; text-align:center; letter-spacing:2px; line-height:'+lh+'px ; " onclick="javascript:typ_search_run(\''+typ+'\',\''+ree+'\'); ';
a_div(id01,id02,ww,hh,typ,fsize,cc,bb,oth2); 
  }    }

function typ_search_run(thistyp,fname) {
  insertnull('se02');
  more_search('null','se02','26%',60,thistyp,fname,36,'black','','margin:20px 0px 0px 30px; padding:10px;');
};

function more_youtube(id01,id02,ww,hh,fname,fsize,cc,bb) {
var lh=fsize+10;  
var data=httpGet(fname);
var webpage=data.split('[more]'); 
for (i=1;i<=webpage.length-1;i++){
var ii=webpage[i].substring(webpage[i].indexOf("[img]")+5,webpage[i].indexOf("[/img]") ); 
var youtube=webpage[i].substring(webpage[i].indexOf("[url]")+5,webpage[i].indexOf("[/url]") ); 
var un=webpage[i].substring(webpage[i].indexOf("[txt]")+5,webpage[i].indexOf("[/txt]") ); 
var b2='<a href=\' '+youtube+'\'  target=\'other\' style="text-decoration:none"><img src= ' + ii + ' style="width:170px; float: left; margin: 10px"><b> ' + un + ' </b><br>'+youtube+'</a>'; 
var oth2='font-size:'+fsize+'px; letter-spacing:2px; line-height:'+lh+'px; margin:20px; padding:20px; border:3px solid #d9d9d9;  border-radius:10px;  ';
a_div(id01,id02,ww,hh,b2,fsize,cc,bb,oth2); 
  }    }

function more_search_total(id01,id02,ww,hh,thistyp,fname,fsize,cc,bb,oth) {
var lh=fsize+10; var j=0;
var data=httpGet(fname);
var weblink=data.split('[more]'); 
for (i=1;i<=weblink.length-1;i++){
var typ=weblink[i].substring(weblink[i].indexOf("[typ]")+5,weblink[i].indexOf("[/typ]") ); 
if (typ==thistyp) { j=j+1;
var uu=weblink[i].substring(weblink[i].indexOf("[url]")+5,weblink[i].indexOf("[/url]") ); 
var tt=weblink[i].substring(weblink[i].indexOf("[txt]")+5,weblink[i].indexOf("[/txt]") ); 
window.open(uu+tt, j );  
 
}  }    }


//-->









