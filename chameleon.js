
function chameleonize(theme) {

	//--------------------------------
	// midnight blue - default theme
	//--------------------------------
	
	var BodyBGColor = '#222';
	var SidebarBorderColor = '#aaa';
	var SidebarBGColor = '#555';
	var SidebarFontColor = '#000';
	var SidebarLinkColor = '#6FCCFF';
	var HeadlineBorderColor = '#aaa';
	var HeadlineBGColor1 = '#BEB19E';
	var HeadlineBGColor2 = '#847554';
	var HeadlineFontColor = '#000';
	var ContentBorderColor = '#aaa';
	var ContentBGColor = '#002030';
	var ContentFontColor = '#fff';
	
	//-------------
	// light blue
	//-------------
	
	if (theme == 'lightblue') {
		BodyBGColor = '#fff';
		SidebarBorderColor = '#bbb';
		SidebarBGColor = '#eee';
		SidebarFontColor = '#000';
		SidebarLinkColor = '#0088cc';
		HeadlineBorderColor = '#5eb9ff';
		HeadlineBGColor1 = '#9ce2fc';
		HeadlineBGColor2 = '#58a2db';
		HeadlineFontColor = '#000';
		ContentBorderColor = '#aaa';
		ContentBGColor = '#fff';
		ContentFontColor = '#000';
	}
	
	//-----------
	// dark red
	//-----------
	
	else if (theme == 'darkred') {
		BodyBGColor = '#000';
		SidebarBorderColor = '#aaa';
		SidebarBGColor = '#170000';
		SidebarFontColor = '#fff';
		SidebarLinkColor = '#6FCCFF';
		HeadlineBorderColor = '#FFB9B9';
		HeadlineBGColor1 = '#FF8282';
		HeadlineBGColor2 = '#950000';
		HeadlineFontColor = '#000';
		ContentBorderColor = '#aaa';
		ContentBGColor = '#2D0000';
		ContentFontColor = '#fff';
	}
	
	//-------------
	// create css
	//-------------
	
	var CSSString =
	
	// body
	'body { ' +
		'margin : 0; ' +
		'padding : 0; ' +
		'background : ' + BodyBGColor + '; ' +
	'} ' +
	
	// header
	'#header { ' +
		'background-color : #1b1b1b; ' +
		'background-image : linear-gradient(to bottom, #444, #000); ' +
		'background-repeat : repeat-x; ' +
		'height : 10%; ' +
		'margin : 0; ' +
		'position : fixed; ' +
		'width : 100%; ' +
		'z-index : 1; ' +
		'line-height : 0; ' +
		'font-size : 0; ' +
		'overflow : auto; ' +
		'white-space : nowrap; ' +
	'} ' +
	'#header img { ' +
		'margin : 1% 0 0 1%; ' +
		'padding : 0; ' +
		'width : 2%; ' +
		'border : 0; ' +
		'display : inline-block; ' +
		'vertical-align : middle; ' +
	'} ' +
	'#header a, #header h1 { ' +
		'margin : 1% 0% 0 1%; ' +
		'display : inline-block; ' +
		'text-decoration : none; ' +
		'font-size : 12px; ' +
		'font-size : 1.6vw; ' +
		'font-family : arial; ' +
		'vertical-align : middle; ' +
	'} ' +
	'#header a { ' +
		'color : #fff; ' +
	'} ' +
	'#header a:hover { ' +
		'text-decoration : underline; ' +
	'} ' +
	'#header h1 { ' +
		'color : #fff; ' +
	'} ' +

	// links / misc
	'#links-wrapper { ' +
		'top : 11%; ' +
		'left : 1%; ' +
		'position : absolute; ' +
		'height : 88%; ' +
	'} ' +
	'#misc-wrapper { ' +
		'top : 11%; ' +
		'left : 80%; ' +
		'position : absolute; ' +
		'height : 88%; ' +
	'} ' +
	'#links, #misc { ' +
		'background-color : ' + SidebarBGColor + '; ' +
		'border : ' + SidebarBorderColor + ' solid thin; ' +
		'box-sizing : border-box; ' +
		'overflow : auto; ' +
		'position : fixed; ' +
		'width : 19%; ' +
		'height : 88%; ' +
		'border-radius : 2px; ' +
	'} ' +
	'#misc { ' +
		'text-align : center; ' +
	'} ' +
	'#links h2, #misc h4 { ' +
		'font-size : 12px; ' +
		'font-size : 1.6vw; ' +
		'font-family : arial; ' +
		'margin : 0 10% 0 10%; ' +
		'padding : 26px 0 13px 0; ' +
		'display : block; ' +
		'color : ' + SidebarFontColor + '; ' +
	'} ' +
	'#links a { ' +
		'font-size : 12px; ' +
		'font-size : 1.6vw; ' +
		'font-family : arial; ' +
		'color : ' + SidebarLinkColor + '; ' +
		'text-decoration : none; ' +
		'line-height : 26px; ' +
		'display : block; ' +
		'margin : 13px 0 13px 0; ' +
		'padding : 0 0 0 15%; ' +
	'} ' +
	'#links a:hover { ' +
		'text-decoration : underline; ' +
	'} ' +
	'#misc img, #misc button { ' +
		'text-align : center; ' +
		'margin : 13px 0 13px 0; ' +
		'max-width : 50%; ' +
		'border: 0; ' +
		'font-size : 10px; ' +
		'font-size : 1.2vw; ' +
		'font-family : arial; ' +
	'}' +
	
	// content
	'.content-wrapper { ' +
		'top : 11%; ' +
		'left : 20%; ' +
		'position : absolute; ' +
		'width : 60%; ' +
	'} ' +
	'.content-wrapper h3 { ' +
		'margin : 0 1% 1% 1%; ' +
		'background-color : ' + HeadlineBGColor1 + '; ' +
		'background-image : linear-gradient(to bottom, ' + HeadlineBGColor1 + ', ' + HeadlineBGColor2 + '); ' +
		'border : ' + HeadlineBorderColor + ' solid thin; ' +
		'box-sizing : border-box; ' +
		'border-radius : 2px; ' +
		'width : 98%; ' +
		'padding : 26px 0 26px 0; ' +
		'color : ' + HeadlineFontColor + '; ' +
		'font-size : 16px; ' +
		'font-size : 2.0vw; ' +
		'font-family : arial; ' +
		'display : inline-block; ' +
		'text-align : center; ' +
	'} ' +
	'.content-wrapper small { ' +
		'margin : 0 1% 1% 1%; ' +
		'width : 98%; ' +
		'padding : 26px 0 26px 0; ' +
		'font-size : 10px; ' +
		'font-size : 1.0vw; ' +
		'font-family : arial; ' +
		'display : inline-block; ' +
		'text-align : center; ' +
		'color: ' + ContentFontColor + '; ' +
	'} ' +
	'.content { ' +
		'display : block; ' +
		'margin : 0 1% 1% 1%; ' +
		'width : 98%; ' +
		'background-color : ' + ContentBGColor + '; ' +
		'border : ' + ContentBorderColor + ' solid thin; ' +
		'box-sizing : border-box; ' +
		'border-radius : 2px; ' +
	'} ' +
	'.content img { ' +
		'max-width: 50%; ' +
		'float: left; ' +
		'margin : 0% 5% 0% 5%; ' +
		'padding : 26px 0 13px 0; ' +
	'} ' +
	'.content p { ' +
		'margin : 0% 5% 0% 5%; ' +
		'padding : 26px 0 26px 0; ' +
		'font-size : 12px; ' +
		'font-size : 1.4vw; ' +
		'font-family : arial; ' +
		'color: ' + ContentFontColor + '; ' +
	'} ';

	//-------------
	// append css
	//-------------
	
	var DocHead = document.head || document.getElementsByTagName('head')[0];
	var StyleSheet = document.createElement('style');
	StyleSheet.type = 'text/css';
	if (StyleSheet.styleSheet){
	  StyleSheet.styleSheet.cssText = CSSString;
	} else {
	  StyleSheet.appendChild(document.createTextNode(CSSString));
	}
	DocHead.appendChild(StyleSheet);
	
}