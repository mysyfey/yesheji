var Ajax = {
	get:function(url, fn){
		var xml = new XMLHttpRequest()
		xml.open("GET",url,true);
		xml.onreadystatechange = function (){
    	switch(xml.readyState){
        case 0:
            // 此时对象尚未初始化，也没有调用open方法
            console.log("创建请求...");
            break;
        case 1:
            // 此时对象已经调用了open方法，当没有调用send方法
            console.log("请求创建成功，准备发送请求...");
            break;
        case 2:
            // 此时调用了send方法，但服务器还没有给出响应
            console.log("请求发送完毕，等待接收响应...");
            break;
        case 3:
            // 此时正在接收服务器的请求，当还没有结束，一般这里不做处理
            break;
        case 4:
            // 此时已经得到了服务器放回的数据，可以开始处理
            console.log("接收响应成功，开始处理...");

            if(xml.status == 200){
            	fn(xml.responseText);
            	console.log("响应处理完毕，本次AJAX结束。");
            }else 
            	console.log("响应异常？ " + xml.status);

            // 调用自定义的函数处理结果

            break;
    	}
		};
		xml.send();
	},
    post:function(url, data, type, token,fn){
        var xml = new XMLHttpRequest();
        xml.open("POST",url,true);
        xml.setRequestHeader("Content-Type", type ? type : "application/x-www-form-urlencoded");  
        if(token)
            xml.setRequestHeader('CSRF-Token', token);  
        xml.onreadystatechange = function (){
            switch(xml.readyState){
            case 4:
            // 此时已经得到了服务器放回的数据，可以开始处理
                console.log("接收响应成功，开始处理...");
                if(xml.status == 200){
                    fn(xml.responseText);
                    console.log("响应处理完毕，本次AJAX结束。");
                }else 
                    console.log("响应异常？ " + xml.status);
                break;
            }
        };
        if(data)
            xml.send(data);
        else
            xml.send();
    }
};