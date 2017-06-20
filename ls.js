function loadDoc(url,type) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			//lscache key btoa(this.responseURL)
			//lscache value this.responseText 
			if(type=='css'){
				add_head_css(this.responseText);
			}else if(type=='js'){
				add_head_js(this.responseText);
			}
		}
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}

function add_head_css(css){
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
	style.type = 'text/css';
	if (style.styleSheet){
	  style.styleSheet.cssText = css;
	} else {
	  style.appendChild(document.createTextNode(css));
	}
	head.appendChild(style);
}
function add_head_js(js){
    head = document.head || document.getElementsByTagName('head')[0],
    jscript = document.createElement('script');
	jscript.type = 'text/javascript';
	jscript.innerHTML = js;
	head.appendChild(jscript);
}
