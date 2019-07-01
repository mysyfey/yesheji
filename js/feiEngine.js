var feiEngine = {
	compile: function (template, data) {

		var str= "<style>.directory-header{height:100px;width:100%;background-color:white;}.directory-header li{display:inline-block;float:left;position:relative;}.directory-header li>a{font-size:16px;font-weight:400;letter-spacing:2px;padding:10px 15px;line-height:20px;position:relative;display:block;}</style><div class=\"directory-header\"><ul>";
	
		for(var dir in data.navDir){
			str += "<li><a href='javascript:void(0)' onclick='get(this)' data-link='" + data.navDir[dir].link +"'>"+data.navDir[dir].name + "</a></li>"
		} 
		str+="</ul></div>";

		if(template == "file"){
			str+="<pre style=\"word-wrap: break-word; white-space: pre-wrap;\">" + data.content  +"</pre>";
		}
		else{
			str +="<ul>";
    	for(var i in data.folder){ 
    		str+= "<li><a href='javascript:void(0)' data-link='"+ data.baseDir + data.folder[i] 
    				+"' onclick='get(this)' >" +data.folder[i]+ "</a></li>" 
     	} 
			str+="</ul>";
		}

		return str;
	}
};

var Ajax={
  get: function(url, fn) {
    // XMLHttpRequest对象用于在后台与服务器交换数据   
    var xhr = new XMLHttpRequest();            
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      // readyState == 4说明请求已完成
      if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) { 
        // 从服务器获得数据 
        fn.call(this, xhr.responseText);  
      }
    };
    xhr.send();
  },
  // datat应为'a=a1&b=b1'这种字符串格式，在jq里如果data为对象会自动将对象转成这种字符串格式
  post: function (url, data, fn) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    // 添加http头，发送信息至服务器时内容编码类型
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
        fn.call(this, xhr.responseText);
      }
    };
    xhr.send(data);
  }
}