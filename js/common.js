$(function(){
	// Useragentで端末判定
	var ua = navigator.userAgent.toUpperCase();
	if(ua.indexOf('IPHONE') != -1 || (ua.indexOf('ANDROID') != -1 && ua.indexOf('MOBILE') != -1)){
		$("body").attr("id", "mobile");
	}else{
		$("body").attr("id", "pc");
	}
	
	// ボタンエフェクト
	// マウスオーバー画像には"_on"を付ける
	// 通常画像の制限は無いが、リンクしない画像の場合"_off"にすると分かりやすい
	// 通常画像に"_off"を付けても問題は無いが統一性がなくなる
	$('.linkImg').hover(
		function(){
			// マウスオーバー
			console.log("over");
			$(this).attr('src', $(this).attr('src').replace('.png', '_on.png'));
		}, 
		function(){
			// マウスアウト
			if (!$(this).hasClass('currentPage')) {
				$(this).attr('src', $(this).attr('src').replace('_on', '')
			);
		}
	});
});


function getUrlVars() {
	// クエリをハッシュにして返す
	
	var vars = [], hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
 
	for(var i = 0; i < hashes.length; i++)
	{
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
 
	return vars;
}

function getTimestamp() {
	// クエリにあるタイムスタンプtsを返す
	var arr = getUrlVars();
	return arr['ts'];
}