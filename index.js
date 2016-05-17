// 01： 实现方法 a
// a(5) = 0 + 1 + 2 + 3 + 4 + 5 = 15
// a(n) = 0 + 1 + 2 + ... + n

//方法1
/*var sum = function(n) {
    if (n <= 1)
        return 1;
    else {
        return n + arguments.callee(n - 1);
    }
}
alert(sum(1));
*/


//方法2
/*function a(n){
    if(n <= 1) {
        return 1;
    }else {
        return n + arguments.callee(n-1);
    }    
}
document.getElementById("count-btn").onclick = function(){
        var n=parseInt(document.getElementById("int").value.trim());
        var sub =a(n);
        alert(sub);
}*/



// 02： 网页cookie 操作
var CookieUtil = {
     get:function(name){
     	var cookieName = encodeURIComponent(name)+"=",
     	    cookieStart = document.cookie.indexOf(cookieName),
     	    cookieValue = null;
     	if(cookieStart > -1){
     		var cookieEnd = document.cookie.indexOf(";",cookieStart);
     		if(cookieEnd == -1){
     			cookieEnd = document.cookie.length;
     		}
     		cookieValue=decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
     	}
     	return cookieValue;
     },

     set:function(name,value,expires,path,domain,secure){
     	var cookieText = encodeURIComponent(name) + "=" +encodeURIComponent(value);
        if(expires instanceof Date){
        	cookieText += "; expires=" + expires.toGMTString();
        }
        if(path){
        	cookieText += "; path=" + path;
        }
        if(domain){
        	cookieText += "; doamin=" + domain;
        }
        if(secure){
        	cookieText += "; secure=" + secure;
        }
        document.cookie=cookieText;
     },

     unset:function(name,path,doamin,secure){
     	this.set(name, "", new Date(0), path, doamin, secure);
     }
};

CookieUtil.set('name', 'your name');
CookieUtil.get("name");
CookieUtil.unset("name");


