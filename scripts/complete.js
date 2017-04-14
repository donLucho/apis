var DRYOBJ = ( function ( ) {
	
	/*################  ES5 pragma  ######################*/
	'use strict';	

	var _bpms = 15.46875;
	// The Browser Prefixes
	var _arVendorPREs = [ "moz", "ms", "webkit", "o" ];
	var _window = window; // GLOBAL element	
	var _getWindowWidth = window.innerWidth;
	var _getWindowHeight = window.innerHeight;
	
	var _history = window.history;
	var _location = window.location;
	
	var _screen = window.screen;
	var _getScreenWidth = window.screen.width;
	var _getScreenHeight = window.screen.height;
	
	var _document = window.document; // DOM Document Object
	
	var _body = window.document.body;// <body> element
	var _getBodyHeight = window.document.body.offsetHeight;
	var _getBodyWidth = window.document.body.offsetWidth;
	
	var _viewport = window.document.documentElement; // <html> Element
	
	var _navigator = window.navigator;
	var _navigatorWidth = window.navigator.clientWidth;
	var _navigatorHeight = window.navigator.clientHeight;
	
	var _getViewportWidth = window.document.documentElement.clientWidth;
	var _getViewportHeight = window.document.documentElement.clientHeight;

	var _retDevicePixelRatio = window.devicePixelRatio; 

	function _AddEventoHandler( nodeFlanders, type, callback ) {
		if( type !== "DOMContentLoaded") { 
			if( nodeFlanders.addEventListener ) { 
				// W3C browser implementation 
				nodeFlanders.addEventListener( type, callback, false);
			}		
			else	
			if( nodeFlanders.attachEvent ) { 
				// IE8-- browser implementation 
				nodeFlanders.attachEvent( "on" + type, callback );
			} 		
			else { 
				// Classical Event model
				nodeFlanders["on" + type] = callback; 
			}
		}
		else 
		if( type === "DOMContentLoaded" ) { 
			if( nodeFlanders.addEventListener ) { 
				// W3C browser implementation 
				nodeFlanders.addEventListener( type, callback, false);
			}
			else 
			if( nodeFlanders.attachEvent ) { 
				if( nodeFlanders.readyState === "loading" ) {
					nodeFlanders.onreadystatechange = callback;
				}
			}
			else { 
				// Classical Event model
				nodeFlanders["on" + type] = callback; 
			}
		}
	}
		// ######################
	// ##   Confirm Video Codices Routine(s)
	// ######################	
	
	function _ReturnVideoCodex( vidByID_pm ) { 
		
		var vdcdxTxt = "";
		if( vidByID_pm.canPlayType && vidByID_pm.canPlayType('video/webm; codecs="vp8, vorbis"') ) {
			// return !!( vidByID_pm.canPlayType && vidByID_pm.canPlayType('video/webm; codecs="vp8, vorbis"') );
			return vdcdxTxt = "webm";
		}
		else 
		if( vidByID_pm.canPlayType && vidByID_pm.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"') ) {
			// return !!( vidByID_pm.canPlayType && vidByID_pm.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"') );
			return vdcdxTxt = "mp4";
		}
		else 
		if( vidByID_pm.canPlayType && vidByID_pm.canPlayType('video/ogg; codecs="theora"') ) { 
			// return !!( vidByID_pm.canPlayType && vidByID_pm.canPlayType('video/ogg; codecs="theora"') );
			return vdcdxTxt = "ogv";
		}
		
		return vdcdxTxt;
		
	}
	
	// ######################
	// ##   Confirm Audio Codices Routine(s)
	// ######################
	
	function _ReturnAudioCodex( audByID_pm ) { 
		
		var audcdxTxt = ""; 
		// MP3 format 
		if( audByID_pm.canPlayType && audByID_pm.canPlayType('audio/mpeg;') ) { 
	// return !!(audByID_pm.canPlayType && audByID_pm.canPlayType('audio/mpeg;').replace(/no/, '')); 
			return audcdxTxt = "mp3";
		}
		// Vorbis format
		else 
		if( audByID_pm.canPlayType && audByID_pm.canPlayType('audio/ogg; codecs="vorbis"') ) { 
	// return !!(audByID_pm.canPlayType && audByID_pm.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''));
			return audcdxTxt = "ogg";
		}		
		// AAC format ( not serving this )
		else 
		if( audByID_pm.canPlayType && audByID_pm.canPlayType('audio/mp4; codecs="mp4a.40.2"') ) {
	// return !!(audByID_pm.canPlayType && audByID_pm.canPlayType('audio/mp4; codecs="mp4a.40.2"').replace(/no/, ''));
			return audcdxTxt = "aac";
		}
		// WAV format
		else 
		if( audByID_pm.canPlayType && audByID_pm.canPlayType('audio/wav; codecs="1"') ) { 
	// return !!(audByID_pm.canPlayType && audByID_pm.canPlayType('audio/wav; codecs="1"').replace(/no/, ''));
			return audcdxTxt = "wav";
		} 
		return audcdxTxt; 
		
	}

	// ######################
	// ##   Generic Return Property Routine 
	// ##   with pm1( JSProp) and pm2( DOM_el_ex_document_or_OTHER ) 
	// ##   and pm2( DOM_el_ex_document_or_OTHER ) 
	// ######################	
	
	function _RetPropertyRoutine( pm1, pm2 ) { 
		
		if( pm1 === "BlobBuilder" ) {
			var ar_vendorPreez = [ "webkit" , "WebKit" , "moz" , "Moz" , "o" , "O" , "ms" , "MS" ]; // --> // object
		}
		else {
			var ar_vendorPreez = _arVendorPREs; // [ "moz", "ms", "webkit", "o" ]  --> // object
		} 
		
		var clCharMax = ar_vendorPreez.length; // 3 			
		var leProp;
		var dL;
		var param = pm1; // getUserMedia
		var paramEl = pm2; // Navigator
		var len = param.length; 
		var nc = param.slice( 0,1 ); // g
		var Uc = param.slice( 0,1 ).toUpperCase(); // G
		var Param = param.replace( nc, Uc ); // GetUserMedia	
		if ( param in paramEl ) { 
			leProp = param; 
		} 
		for ( dL = 0; dL < clCharMax; dL = dL + 1) { 
			if ( ar_vendorPreez[ dL ] + Param in paramEl ) { 
				leProp = ar_vendorPreez[ dL ] + Param; 
			} 
		} 
		return leProp;
	}
	
	// ######################
	// ##   Generic CSS Property Constructor Routine 
	// ##   with pm1( CSSProp ) 
	// ##   and pm2( document.createElement("div").style ) 
	// ######################	
	
	function _ReturnJSProperty( pm1 ) { // ( pm1, pm2 ) 
		var pm2 = document.createElement("div").style; // 
		var ar_vendorPreez = _arVendorPREs; // -->  object
		// [ "moz", "ms", "webkit", "o" ] 
		var clCharMax = ar_vendorPreez.length; // 3 
		var leProp;
		var dL;
		
		var param = pm1; // " transform "
		var paramEl = pm2; // " document.createElement("div").style "
		var len = param.length; 
		var nc = param.slice( 0,1 ); // t
		var Uc = param.slice( 0,1 ).toUpperCase(); // T
		
		var Param = param.replace( nc, Uc ); // transform	
		if ( param in paramEl ) { 
			leProp = param; 
		} 
		for ( dL = 0; dL < clCharMax; dL = dL + 1) { 
			if ( ar_vendorPreez[ dL ] + Param in paramEl ) { 
		// " transform " --> msTransform, webkitTransform, oTransform, mozTransform
				leProp = ar_vendorPreez[ dL ] + Param; 
			} 
		} 
		return leProp;
	}
	
	// ######################
	// ##   Return CSS Property Routine 
	// ##   with pm1( CSSProp ) 
	// ##   and pm2( document.createElement("div").style ) 
	// ######################	
	
	function _ReturnCSSProperty( pm1 ) { // ( pm1, pm2 ) 
		var dashChar = "-";
		var pm2 = document.createElement("div").style;  
		var ar_vendorPreez = _arVendorPREs; // -->  object
		// [ "moz", "ms", "webkit", "o" ] 
		var clCharMax = ar_vendorPreez.length; // 3 
		var leProp;
		var dL;
		
		var param = pm1; // " transform "
		var paramEl = pm2; // " document.createElement("div").style "
		var len = param.length; 
		var nc = param.slice( 0,1 ); // t
		var Uc = param.slice( 0,1 ).toUpperCase(); // T
		
		var Param = param.replace( nc, Uc ); // transform	
		if ( param in paramEl ) { 
			leProp = param; 
		} 
		for ( dL = 0; dL < clCharMax; dL = dL + 1) { 
			if ( ar_vendorPreez[ dL ] + Param in paramEl ) { 
		// " transform " --> -ms-transform, -webkit-transform, -o-transform, -moz-transform
				leProp = dashChar + ar_vendorPreez[ dL ] + dashChar + param; 
			} 
		} 
		return leProp;
	}
	
	// ############################
	// ##   Return CSS Keyframe Animation Routine 
	// ##   with pm1( CSSProp ) 
	// ##   that is later helpful in obtaining 
	// ##   "the ampersand + keyframes" property
	// ############################
	
	function _Returnkeyframes( pm1 ) { // ( pm1 ) 
		var dashChar = "-";
		var ampChar = "@";
		
		var pm2 = document.createElement("div").style; // 
		var ar_vendorPreez = [ "moz", "ms", "webkit", "o" ]; // -->  object
		// [ "moz", "ms", "webkit", "o" ] 
		var clCharMax = ar_vendorPreez.length; // 3 
		
		var keyframes; // var leProp;
		var dL;
		
		var param = pm1; // "animationName" 
		var paramEl = pm2; // " document.createElement("div").style "
		var len = param.length; 
		var nc = param.slice( 0,1 ); // a // t
		var Uc = param.slice( 0,1 ).toUpperCase(); // A // T
		
		var Param = param.replace( nc, Uc ); // animationName 
		if ( param in paramEl ) { 
			// leProp = param; 
			keyframes = ampChar + "keyframes"; 
		} 
		
		for ( dL = 0; dL < clCharMax; dL = dL + 1) { 
			if ( ar_vendorPreez[ dL ] + Param in paramEl ) { 
				// leProp = dashChar + ar_vendorPreez[ dL ] + dashChar + param; 
				
		// " @keyframes " --> @-ms-keyframes, @-webkit-keyframes, @-o-keyframes, @-moz-keyframes
				keyframes = ampChar + dashChar + ar_vendorPreez[ dL ] + dashChar + "keyframes"; //
			} 
		} 
		//return leProp;
		return keyframes;
	}

	// html5 Geolocation API
	function _If_GeolocationAPI() {
		return !!( window.navigator.geolocation );
	}
	
	// html5 Web Storage API
	function _If_WebStorageAPI() {
		return !!( window.localStorage || window.localStorage );
	}
	
	// html5 History API
	function _If_HistoryAPI() {
		return !!( (window.history && window.history.pushState) || ( window.history && window.history.replaceState ) );
		// return !!( window.history  && ( window.history.pushState || window.history.replaceState ) );
		// return !!( window.history.pushState || window.history.replaceState );
		// return !!( window.history.popstate || window.history.pushstate );
	}

	// web components - HTML Imports
	// supports t/f - "document.createElement("link").import"
	function _If_HtmlImports() {
		return !!( "import" in document.createElement("link") );
	}
	
	// web components - ShadowDOM
	// supports t/f - "document.querySelector( "#" + pmElById ).createShadowRoot"
	function _If_ShadowDOM( pmElById ) { 
		return !!( "createShadowRoot" in document.querySelector( "#" + pmElById ) );
	}
	
	// web components - HTML Templates
	// supports t/f - "document.createElement("template").content"
	function _If_Template() {
		return !!( "content" in document.createElement("template") );
	}
	
	// web components - Custom Elements
	// supports t/f - "document.registerElement"
	function _If_CustomELs() {
		return !!( "registerElement" in document );
	}
	
	// HTML5 APIs and other presently-private properties 
	
	// supports t/f - "window.Promise"	
	function _If_Promise() {
		return !!( "Promise" in window );
	}
	
	// supports t/f - "window.WebSocket"	
	function _If_WebSocket(){
		return !!( "WebSocket" in window );
	}
	
	// supports t/f - "window.openDatabase"	
	function _If_WebSql_3_0_Lite() {
		return !!( 'openDatabase' in window );
	}

	// supports t/f - "window.navigator.serviceWorker"
	function _If_serviceWorker() {
		return !!( window.navigator.serviceWorker );
	}

	// supports t/f - "window.fetch"
	function _If_fetch() {
		return !!( 'fetch' in window );
	}
	
	// supports t/f - " caution -- Orientation "
	function _If_matchMedia() {
		return !!( window.matchMedia );
	}
	
	// supports t/f - " caution -- Device Orientation " -- new
	function _If_devorient() {
		return !!( window.deviceorientation );
	}
	
	// supports t/f - " caution -- Device Orientation "
	function _If_DevOrientEvent() {
		return !!( window.DeviceOrientationEvent ); // .Device ! .device
	}
	// supports t/f - " caution -- Orientation Event " ~ MOZ specific
	function _If_OrientationEvent() {
		return !!( window.orientationEvent ); 
	}
	
	// supports t/f - " caution -- Orientation Event "
	function _If_Orientation() {
		return !!( window.orientation );
	}
	
	// supports t/f - Device Motion
	function _If_DevMotion() {
		return !!( window.DeviceMotionEvent ); // window.deviceMotionEvent
	}
	// supports t/f - listenForDeviceMovement property
	function _If_MoveListen() {
		return !!( "listenForDeviceMovement" in window );
	}
	// html5 Touch API support 
	function _If_Touch() {
		return !!( window.Touch );
		// return !!("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch );
	}
	// DPR support 
	function _If_DevPixRatioSupported() {
		return !!( window.devicePixelRatio );
	}
	// html5 drag and drop API support 
	function _If_Drag_n_Drop() {
		
		if(document.documentElement.addEventListener) {
			return !!( "draggable" in document.createElement("span") );
		}
		else
		if(document.documentElement.attachEvent) { 
			return 1;
		}
	}
	// html5 page visibilty API support 
	function _If_PageViz() { 
		return !!( "hidden" in window.document );
	}
	//yowza

	// END of _private properties 
	return {

		Utils: { 
			evt_u : {
				AddEventoHandler : function( nodeFlanders, type, callback ) {
					return _AddEventoHandler( nodeFlanders, type, callback );
				} 
			} , // END DRYOBJ.Utils.evt_u

			aR_u : {
				vendors : { 
					arVendorPREs : _arVendorPREs 
				} 
			} // END DRYOBJ.Utils.aR_u
		} ,

		Codices: { 
			ReturnVideoCodex : function( vidByID_pm ) {
				return _ReturnVideoCodex( vidByID_pm );
			} , 
			ReturnAudioCodex : function ( audByID_pm ) {
				return _ReturnAudioCodex( audByID_pm );
			} 
		} , // END DRYOBJ.Codices  

		ReturnProps : { 
			RetPropertyRoutine : function( pm1, pm2 ) {
				return _RetPropertyRoutine( pm1, pm2 );
			} 
		} , // END DRYOBJ.ReturnProps 
		
		ApplyPrefixes : { 
			ReturnJSProperty : function( pm1 ) {
				return _ReturnJSProperty( pm1 );
			} , 
			ReturnCSSProperty : function( pm1 ) {
				return _ReturnCSSProperty( pm1 );
			} , 
			Returnkeyframes : function( pm1 ) {
				return _Returnkeyframes( pm1 );
			} 
		} , // END DRYOBJ.ApplyPrefixes 

		RetELs : {
			glow : function() { 
				return _window; 
			} ,
			docObj : function() { 
				return _document; 
			} ,
			htmlEL : function() { 
				return _viewport; 
			} ,
			bodyEL : function() { 
				return _body; 
			} , 
			navEL : function() {
				return _navigator; 
			} 
		} , // END DRYOBJ.RetELs

		rafUtils : { 
			get_bpms: function() {
				return _bpms; 
			} 
		} , 
		
		PixelsArePixelsArePixels : { 

			bodHeight : function() {
				return _getBodyHeight;
			} , 
			bodWidth : function() {
				return _getBodyWidth;
			} , 
			screenHeight : function() {
				return _getScreenHeight;
			} , 
			screenWidth : function() {
				return _getScreenWidth;
			} ,
			
			glowHeight : function() {
				return _getWindowHeight;
			} , 
			glowWidth : function() { 
				return _getWindowWidth;
			} 

		} , // END DRYOBJ.PixelsArePixelsArePixels

		html5_Geolocation_API : {
			If_GeolocationAPI : function() {
				return _If_GeolocationAPI();
			}
		} , 
		
		html5_WebStorage_API : {
			If_WebStorageAPI : function() {
				return _If_WebStorageAPI();
			}
		} , 
		
		html5_History_API : {
			If_HistoryAPI : function() {
				return _If_HistoryAPI();
			}
		} , 

		DeviceCapabilities : { 
			
			ecma5_If_matchMedia : function() { 
				return _If_matchMedia();	
			} , 
			
			html5_if_WebSQL: function() {
				return _If_WebSql_3_0_Lite();
			} ,
			
			html5_if_serviceWorker: function() {
				return _If_serviceWorker();
			} ,

			html5_if_fetch: function() {
				return _If_fetch();
			} , 

			WC_if_html_imports: function() {
				return _If_HtmlImports();
			},
			
			WC_if_shadow_dom: function( pmElById ) {
				return _If_ShadowDOM( pmElById );
			},
			
			WC_if_html_template: function() {
				return _If_Template();
			},
			
			WC_if_custom_elements: function() {
				return _If_CustomELs();
			},
			
			html5_if_websocket: function() {
				return _If_WebSocket();
			},
			
			html5_if_promise: function() {
				return _If_Promise();
			},
			
			html5_If_Touch : function() { 
				return _If_Touch();	
			} ,
			
			html5_If_Drag_n_Drop: function() {
				return _If_Drag_n_Drop();
			} , 

			html5_If_PageViz: function() {
				return _If_PageViz();
			} , 
			
			html5_if_DeviceOrientationEvent : function() {
				return _If_DevOrientEvent();
			} , 
						
			html5_if_deviceorientation : function() {
				return _If_devorient();
			} , 
			
			html5_if_OrientationEvent : function() {
				return _If_OrientationEvent();
			} , 
						
			html5_if_Orientation : function() {
				return _If_Orientation();
			} , 
			
			html5_if_listenForDeviceMovement : function() {
				return _If_MoveListen(); 
			} , 
			
			html5_if_DeviceMotion : function() {
				return _If_DevMotion();
			} , 
			
			html5_if_DevicePixelRatioSupported : function() { 
				return _If_DevPixRatioSupported(); 
			} ,
			 
			html5_Actual_DevicePixelRatio : function() {
				return _retDevicePixelRatio;
			} 
		} // END DRYOBJ.DeviceCapabilities
	}; // END public properties
	
}( ) ); // console.log( DRYOBJ ); 


var Gh_pages_Apis = ( function() {
	/*################  ES5 pragma  ######################*/
	'use strict';

	var _css_keyframes = DRYOBJ.ApplyPrefixes.Returnkeyframes( "animationName" ); 
	
	var _css_animation = DRYOBJ.ApplyPrefixes.ReturnCSSProperty( 'animation' ); // cssanimation
	var _js_animation = DRYOBJ.ApplyPrefixes.ReturnJSProperty( "animation" ); // jsanimation

	var _css_transform = DRYOBJ.ApplyPrefixes.ReturnCSSProperty( "transform" ); 
	var _js_transform = DRYOBJ.ApplyPrefixes.ReturnJSProperty( 'transform' ); 
	
	var _css_transition = DRYOBJ.ApplyPrefixes.ReturnCSSProperty( "transition" ); 
	var _js_transition = DRYOBJ.ApplyPrefixes.ReturnJSProperty( 'transition' ); 
	
	var _css_boxshadow = DRYOBJ.ApplyPrefixes.ReturnCSSProperty( 'box-shadow' ); 
	var _js_boxshadow = DRYOBJ.ApplyPrefixes.ReturnJSProperty( 'box-shadow' ); 
	
	var _css_textshadow = DRYOBJ.ApplyPrefixes.ReturnCSSProperty( 'text-shadow' ); 
	var _js_textshadow = DRYOBJ.ApplyPrefixes.ReturnJSProperty( 'text-shadow' ); 
	
	var _css_borderradius = DRYOBJ.ApplyPrefixes.ReturnCSSProperty( 'border-radius' ); 
	var _js_borderradius = DRYOBJ.ApplyPrefixes.ReturnJSProperty( 'border-radius' ); 
	
	var _css_taphighlightcolor = DRYOBJ.ApplyPrefixes.ReturnCSSProperty( 'tap-highlight-color' ); 
	var _js_taphighlightcolor = DRYOBJ.ApplyPrefixes.ReturnJSProperty( 'tap-highlight-color' ); 
	
	// var webworker_bool = DRYOBJ.DeviceCapabilities.html5_if_webWorker();
	var matchMedia_bool = DRYOBJ.DeviceCapabilities.ecma5_If_matchMedia();	
	
	var retAUD = DRYOBJ.Codices.ReturnAudioCodex( document.createElement( "audio" ) );
	var retVID = DRYOBJ.Codices.ReturnVideoCodex( document.createElement( "video" ) );

	var history_api_bool = DRYOBJ.html5_History_API.If_HistoryAPI();
	var geolocation_api_bool = DRYOBJ.html5_Geolocation_API.If_GeolocationAPI();
	var webstorage_api_bool = DRYOBJ.html5_WebStorage_API.If_WebStorageAPI();
	
	var DPR_bool = DRYOBJ.DeviceCapabilities.html5_if_DevicePixelRatioSupported();
	var actual_DPR = DRYOBJ.DeviceCapabilities.html5_Actual_DevicePixelRatio();	

	var touch_api_bool = DRYOBJ.DeviceCapabilities.html5_If_Touch();
	var DeviceOrientationEvent_api_bool = DRYOBJ.DeviceCapabilities.html5_if_DeviceOrientationEvent();
	var DeviceMotion_api_bool = DRYOBJ.DeviceCapabilities.html5_if_DeviceMotion(); 
	var listenForDeviceMovement_api_bool = DRYOBJ.DeviceCapabilities.html5_if_listenForDeviceMovement(); 

	var promise_bool = DRYOBJ.DeviceCapabilities.html5_if_promise();	
	var serviceworker_bool = DRYOBJ.DeviceCapabilities.html5_if_serviceWorker();	
	var fetch_bool = DRYOBJ.DeviceCapabilities.html5_if_fetch();

	var websocket_bool = DRYOBJ.DeviceCapabilities.html5_if_websocket();

	var imports_bool = DRYOBJ.DeviceCapabilities.WC_if_html_imports();
	var shdwdom_bool = DRYOBJ.DeviceCapabilities.WC_if_shadow_dom('siteinfo');
	var templates_bool = DRYOBJ.DeviceCapabilities.WC_if_html_template();
	var custelmts_bool = DRYOBJ.DeviceCapabilities.WC_if_custom_elements();	
	
	var pageviz_hiddenAttr_objAPI = DRYOBJ.DeviceCapabilities.html5_If_PageViz(); 
	var dragdrop_objAPI = DRYOBJ.DeviceCapabilities.html5_If_Drag_n_Drop();
	var websql_objAPI = DRYOBJ.DeviceCapabilities.html5_if_WebSQL();

	var ixdb_objAPI = DRYOBJ.ReturnProps.RetPropertyRoutine( "indexedDB" , DRYOBJ.RetELs.glow() ); // window.indexedDB
	var requestFullScreen_API_interface = DRYOBJ.ReturnProps.RetPropertyRoutine( "requestFullScreen" , DRYOBJ.RetELs.htmlEL() );
	var cancelFullScreen_API_interface = DRYOBJ.ReturnProps.RetPropertyRoutine( "cancelFullScreen" , DRYOBJ.RetELs.docObj() ); 
	var fullScreenElement_API_interface = DRYOBJ.ReturnProps.RetPropertyRoutine( "fullScreenElement" , DRYOBJ.RetELs.docObj() );
	var fullScreenEnabled_API_interface = DRYOBJ.ReturnProps.RetPropertyRoutine( "fullScreenEnabled" , DRYOBJ.RetELs.docObj() );

	// window.performance	
	var performance_objAPI = DRYOBJ.ReturnProps.RetPropertyRoutine( "performance" , DRYOBJ.RetELs.glow() ); 
	// window.performance.timing
	var timing_perfAPI_interface = DRYOBJ.ReturnProps.RetPropertyRoutine( "timing" , window[ performance_objAPI ] ); 	
	// window.performance.memory
	var memory_perfAPI_interface = DRYOBJ.ReturnProps.RetPropertyRoutine( "memory" , window[ performance_objAPI ] ); 	
	// window.performance.now
	var now_method_perfAPI_prefix = DRYOBJ.ReturnProps.RetPropertyRoutine( "now" , window[ performance_objAPI ] );

	var getUserMedia_objAPI = DRYOBJ.ReturnProps.RetPropertyRoutine( "getUserMedia", DRYOBJ.RetELs.navEL() ); // navigator.getUserMedia 
	var URL_objAPI = DRYOBJ.ReturnProps.RetPropertyRoutine( "URL", DRYOBJ.RetELs.glow() ); // window.URL for --> navigator.getUserMedia	
	var rAF_objAPI = DRYOBJ.ReturnProps.RetPropertyRoutine( "requestAnimationFrame" , DRYOBJ.RetELs.glow() );	// requestAnimationFrame()

	var FileReader_objAPI = DRYOBJ.ReturnProps.RetPropertyRoutine( "FileReader", DRYOBJ.RetELs.glow() ); 
	var File_API_interface = DRYOBJ.ReturnProps.RetPropertyRoutine( "File", DRYOBJ.RetELs.glow() ); 
	var FileList_API_interface = DRYOBJ.ReturnProps.RetPropertyRoutine( "FileList", DRYOBJ.RetELs.glow() ); 
	var Blob_objAPI = DRYOBJ.ReturnProps.RetPropertyRoutine( "Blob", DRYOBJ.RetELs.glow() ); 

	var FileWriter_objAPI = DRYOBJ.ReturnProps.RetPropertyRoutine( "FileWriter", DRYOBJ.RetELs.glow() ); 

	var LocalFileSystem_FS_interface = DRYOBJ.ReturnProps.RetPropertyRoutine( "LocalFileSystem", DRYOBJ.RetELs.glow() );
	var DirectoryReader = DRYOBJ.ReturnProps.RetPropertyRoutine( "DirectoryReader", DRYOBJ.RetELs.glow() );
	var Entry_Directory = DRYOBJ.ReturnProps.RetPropertyRoutine( "DirectoryEntry", DRYOBJ.RetELs.glow() );
	var Entry_File = DRYOBJ.ReturnProps.RetPropertyRoutine( "FileEntry", DRYOBJ.RetELs.glow() ); 

	var FileSystem_objAPI = DRYOBJ.ReturnProps.RetPropertyRoutine( "requestFileSystem", DRYOBJ.RetELs.glow() ); 
	var rFSS = DRYOBJ.ReturnProps.RetPropertyRoutine( "requestFileSystemSync", DRYOBJ.RetELs.glow() ); 
	var rFSU = DRYOBJ.ReturnProps.RetPropertyRoutine( "resolveLocalFileSystemURL", DRYOBJ.RetELs.glow() ); 
	var rFSSU = DRYOBJ.ReturnProps.RetPropertyRoutine( "resolveLocalFileSystemSyncURL", DRYOBJ.RetELs.glow() ); 

	var getAsEntry_FS_Method = DRYOBJ.ReturnProps.RetPropertyRoutine( "getAsEntry", DRYOBJ.RetELs.glow() );
	var storInfo = DRYOBJ.ReturnProps.RetPropertyRoutine( "storageInfo", DRYOBJ.RetELs.glow() ); 

	var audCDX = document.querySelector( "#audCDX" );
	var vidCDX = document.querySelector( "#vidCDX" );
	var writerStatsEL = document.querySelector( "#CreateWriteStats" );	
	var BBStatsEL = document.querySelector( "#DeprecatedSpecStats" );
	var readerStatsEL = document.querySelector( "#ReadManipulateStats" );	
	var locfilsys = document.querySelector( "#locfilsys" );
	var dirrea = document.querySelector( "#dirrea" );
	var m_dirent = document.querySelector( "#m_dirent" );
	var m_filent = document.querySelector( "#m_filent" );
	var m_rfsys = document.querySelector( "#m_rfsys" ); 
	var m_rfssync = document.querySelector( "#m_rfssync" );
	var m_rlfsurl = document.querySelector( "#m_rlfsurl" );
	var m_rlfsync = document.querySelector( "#m_rlfsync" );
	var m_stoinfo = document.querySelector( "#m_stoinfo" );  	
	var m_getasentry = document.querySelector( "#m_getasentry" ); 	
	var GLOWurl = document.querySelector( "#GLOWurl" ); 	
	var history = document.querySelector( "#history" );	
	var geolo = document.querySelector( "#geolo" );	
	var websto = document.querySelector( "#websto" );
	var storaf = document.querySelector( "#storaf" );

	document.querySelector("#userAgent").innerHTML=DRYOBJ.RetELs.navEL().userAgent;	
	document.querySelector("#ViewportWidth").innerHTML=DRYOBJ.PixelsArePixelsArePixels.glowWidth();
	document.querySelector("#ViewportHeight").innerHTML=DRYOBJ.PixelsArePixelsArePixels.glowHeight();
	document.querySelector("#innerWidth").innerHTML=window.innerWidth;
	document.querySelector("#innerHeight").innerHTML=window.innerHeight;
	document.querySelector("#DeviceWidth").innerHTML=DRYOBJ.PixelsArePixelsArePixels.screenWidth();
	document.querySelector("#DeviceHeight").innerHTML=DRYOBJ.PixelsArePixelsArePixels.screenHeight();	
	document.querySelector("#PageWidth").innerHTML=DRYOBJ.PixelsArePixelsArePixels.bodWidth();
	document.querySelector("#PageHeight").innerHTML=DRYOBJ.PixelsArePixelsArePixels.bodHeight(); 

	function ListTimingProps( pmOBJ ) { 
		var dL = "", HK; 
		for ( HK in pmOBJ ) { 
			// dL = dL + "<p><strong>" + HK + " = " + " </strong><span>" + pmOBJ[HK] + " (" + typeof( pmOBJ[ HK ] ) + ")" + "</span></p>";
			dL = dL + "<strong>" + HK + " = " + " </strong><span>" + pmOBJ[HK] + " (" + typeof( pmOBJ[ HK ] ) + ")" + "</span>"; 
		} 
		return dL; 
	} 

	function ListMemoryProps( pmOBJ ) { 
		var dL = "", HK; 
		for ( HK in pmOBJ ) { 
			// dL = dL + "<p><strong>" + HK + " = " + " </strong><span>" + pmOBJ[HK] + " (" + typeof( pmOBJ[ HK ] ) + ")" + "</span></p>";
			dL = dL + "<strong>" + HK + " = " + pmOBJ[HK] + " (" + typeof( pmOBJ[ HK ] ) + ")"  + " </strong> " + ""; 
		} 
		return dL; 
	} 
	

	function _DOMCONLO() {

		if ( matchMedia_bool === "false" ) {
			document.querySelector("#If_matchMedia").innerHTML = " not supported";
		}
		else 
		if ( matchMedia_bool !== "false" ) {
			document.querySelector("#If_matchMedia").innerHTML = " is supported";
		}

		if( !!( _css_keyframes ) ) {
			if( document.classList === undefined ) {
				document.querySelector( '#cssanimkeyframes' ).className = ( "supported" );
			}
			else {
				document.querySelector( '#cssanimkeyframes' ).classList.add( "supported" );
			}
			document.querySelector( '#cssanimkeyframes' ).innerHTML = _css_keyframes + "{} syntax is supported";
		}
		else {
			document.querySelector( '#cssanimkeyframes' ).innerHTML = " syntax not supported";
		}

		if( !!( _css_animation ) && !!( _js_animation ) ) {
			if( document.classList === undefined ) {
				document.querySelector( '#cssanimation' ).className = ( "supported" );
				document.querySelector( '#jsanimation' ).className = ( "supported" );
			}
			else {
				document.querySelector( '#cssanimation' ).classList.add( "supported" );
				document.querySelector( '#jsanimation' ).classList.add( "supported" );
			}
			document.querySelector( '#cssanimation' ).innerHTML = _css_animation + " is supported";
			document.querySelector( '#jsanimation' ).innerHTML = _js_animation + " is supported";
		}
		else {
			document.querySelector( '#cssanimation' ).innerHTML = " not supported";
			document.querySelector( '#jsanimation' ).innerHTML = " not supported";
		}

		if( !!( _css_transform ) && !!( _js_transform ) ) {
			if( document.classList === undefined ) {
				document.querySelector( '#csstransform' ).className = ( "supported" );
				document.querySelector( '#jstransform' ).className = ( "supported" );
			}
			else {
				document.querySelector( '#csstransform' ).classList.add( "supported" );
				document.querySelector( '#jstransform' ).classList.add( "supported" );
			}
			document.querySelector( '#csstransform' ).innerHTML = _css_transform + " is supported";
			document.querySelector( '#jstransform' ).innerHTML = _js_transform + " is supported";
		}
		else {
			document.querySelector( '#csstransform' ).innerHTML = " not supported";
			document.querySelector( '#jstransform' ).innerHTML = " not supported";
		}

		if( !!( _css_taphighlightcolor ) && !!( _js_taphighlightcolor ) ) {
			if( document.classList === undefined ) {
				document.querySelector( '#cssthc' ).className = ( "supported" );
				document.querySelector( '#jsthc' ).className = ( "supported" );
			}
			else {
				document.querySelector( '#cssthc' ).classList.add( "supported" );
				document.querySelector( '#jsthc' ).classList.add( "supported" );
			}
			document.querySelector( '#cssthc' ).innerHTML = _css_taphighlightcolor + " is supported";
			document.querySelector( '#jsthc' ).innerHTML = _js_taphighlightcolor + " is supported";
		}
		else {
			document.querySelector( '#cssthc' ).innerHTML = " not supported";
			document.querySelector( '#jsthc' ).innerHTML = " not supported";
		}

		if( !!( _css_transform ) && !!( _js_transform ) ) {
			if( document.classList === undefined ) {
				document.querySelector( '#csstransform' ).className = ( "supported" );
				document.querySelector( '#jstransform' ).className = ( "supported" );
			}
			else {
				document.querySelector( '#csstransform' ).classList.add( "supported" );
				document.querySelector( '#jstransform' ).classList.add( "supported" );
			}
			document.querySelector( '#csstransform' ).innerHTML = _css_transform + " is supported";
			document.querySelector( '#jstransform' ).innerHTML = _js_transform + " is supported";
		}
		else {
			document.querySelector( '#csstransform' ).innerHTML = " not supported";
			document.querySelector( '#jstransform' ).innerHTML = " not supported";
		}

		if( !!( _css_transition ) && !!( _js_transition ) ) {
			if( document.classList === undefined ) {
				document.querySelector( '#csstransition' ).className = ( "supported" );
				document.querySelector( '#jstransition' ).className = ( "supported" );
			}
			else {
				document.querySelector( '#csstransition' ).classList.add( "supported" );
				document.querySelector( '#jstransition' ).classList.add( "supported" );
			}
			document.querySelector( '#csstransition' ).innerHTML = _css_transition + " is supported";
			document.querySelector( '#jstransition' ).innerHTML = _js_transition + " is supported";
		}
		else {
			document.querySelector( '#csstransition' ).innerHTML = " not supported";
			document.querySelector( '#jstransition' ).innerHTML = " not supported";
		}

		if( !!( _css_boxshadow ) && !!( _css_textshadow ) && !!( _css_borderradius ) ) {
			if( document.classList === undefined ) {
				document.querySelector( '#csscommon' ).className = ( "supported" );
			}
			else {
				document.querySelector( '#csscommon' ).classList.add( "supported" );
			}
			document.querySelector( '#csscommon' ).innerHTML = _css_boxshadow + ", " + _css_textshadow + ", and " + _css_borderradius + " are supported";
		}
		else {
			document.querySelector( '#csscommon' ).innerHTML = " not supported";
		}

		if( !!( _js_boxshadow ) && !!( _js_textshadow ) && !!( _js_borderradius ) ) {
			if( document.classList === undefined ) {
				document.querySelector( '#jscommon' ).className = ( "supported" );
			}
			else {
				document.querySelector( '#jscommon' ).classList.add( "supported" );
			}
			document.querySelector( '#jscommon' ).innerHTML = _js_boxshadow + ", " + _js_textshadow + ", and " + _js_borderradius + " are supported";
		}
		else {
			document.querySelector( '#jscommon' ).innerHTML = " not supported";
		}

		if( !!( rAF_objAPI ) ) {
			if( document.classList === undefined ) {
				storaf.className = ( "supported" );
			}
			else {
				storaf.classList.add( "supported" );
			}
			storaf.innerHTML = "" + rAF_objAPI + " supported";
		}
		else {
			storaf.innerHTML = "setTimeout() ";
		}

		if( !!( retAUD ) ) {
			audCDX.innerHTML = retAUD ;
		}
		else {
			audCDX.innerHTML = "audio-element not supported";
		}
		if( !!( retVID ) ) {
			vidCDX.innerHTML = retVID ;
		}
		else {
			vidCDX.innerHTML = "video-element not supported";
		}

		if( !!( FileSystem_objAPI ) ) {
			if( document.classList === undefined ) {
				m_rfsys.className = ( "supported" );
			}
			else {
				m_rfsys.classList.add( "supported" );
			}
			m_rfsys.innerHTML = FileSystem_objAPI + "() supported";
		}
		else {
			m_rfsys.innerHTML = " not supported";
		}
		if( !!( rFSS ) ) {
			if( document.classList === undefined ) {
				m_rfssync.className = ( "supported" );
			}
			else {
				m_rfssync.classList.add( "supported" );
			}
			m_rfssync.innerHTML = rFSS + " supported";
		}
		else {
			m_rfssync.innerHTML = " not supported";
		}

		if( !!( rFSU ) ) {
			if( document.classList === undefined ) {
				m_rlfsurl.className = ( "supported" );
			}
			else {
				m_rlfsurl.classList.add( "supported" );
			}
			m_rlfsurl.innerHTML = rFSU + "() supported";
		}
		else {
			m_rlfsurl.innerHTML = " not supported";
		}

		if( !!( rFSSU ) ) {
			if( document.classList === undefined ) {
				m_rlfsync.className = ( "supported" );
			}
			else {
				m_rlfsync.classList.add( "supported" );
			}
			m_rlfsync.innerHTML = rFSSU + "() supported";
		}
		else {
			m_rlfsync.innerHTML = " not supported";
		}

		if( !!( storInfo ) ) {
			if( document.classList === undefined ) {
				m_stoinfo.className = ( "supported" );
			}
			else {
				m_stoinfo.classList.add( "supported" );
			}
			m_stoinfo.innerHTML = storInfo + " supported";
		}
		else {
			m_stoinfo.innerHTML = " not supported";
		}

		if( !!( getAsEntry_FS_Method ) ) {
			if( document.classList === undefined ) {
				m_getasentry.className = ( "supported" );
			}
			else {
				m_getasentry.classList.add( "supported" );
			}
			m_getasentry.innerHTML = getAsEntry_FS_Method + " supported";
		}
		else {
			m_getasentry.innerHTML = " not supported";
		}

		if( !!( LocalFileSystem_FS_interface ) ) {
			if( document.classList === undefined ) {
				locfilsys.className = ( "supported" );
			}
			else {
				locfilsys.classList.add( "supported" );
			}
			locfilsys.innerHTML = LocalFileSystem_FS_interface + " supported";
		}
		else {
			locfilsys.innerHTML = " not supported";
		}
		if( !!( DirectoryReader ) ) {
			if( document.classList === undefined ) {
				dirrea.className = ( "supported" );
			}
			else {
				dirrea.classList.add( "supported" );
			}
			dirrea.innerHTML = DirectoryReader + " supported";
		}
		else {
			dirrea.innerHTML = " not supported";
		}
		if( !!( Entry_Directory ) ) {
			if( document.classList === undefined ) {
				m_dirent.className = ( "supported" );
			}
			else {
				m_dirent.classList.add( "supported" );
			}
			m_dirent.innerHTML = Entry_Directory + " supported";
		}
		else {
			m_dirent.innerHTML = " not supported";
		}
		if( !!( Entry_File ) ) {
			if( document.classList === undefined ) {
				m_filent.className = ( "supported" );
			}
			else {
				m_filent.classList.add( "supported" );
			}
			m_filent.innerHTML = Entry_File + " supported";
		}
		else {
			m_filent.innerHTML = " not supported";
		}

		if( !!( pageviz_hiddenAttr_objAPI ) ) {
			if( document.classList === undefined ) {
				document.querySelector('#pageviz').className = ( "supported" );
			}
			else {
				document.querySelector('#pageviz').classList.add( "supported" );
			}
			document.querySelector('#pageviz').innerHTML = " is supported";
		}
		else {
			document.querySelector('#pageviz').innerHTML = " is not supported";
		}
		
		if( !!( requestFullScreen_API_interface ) ) {
			if( document.classList === undefined ) {
				document.querySelector('#rqstfullscreen').className = ( "supported" );
			}
			else {
				document.querySelector('#rqstfullscreen').classList.add( "supported" );
			}
			document.querySelector('#rqstfullscreen').innerHTML = requestFullScreen_API_interface + " is supported";
		}
		else {
			document.querySelector('#rqstfullscreen').innerHTML = " is not supported";
		}

		if( !!( fullScreenElement_API_interface ) && !!( fullScreenEnabled_API_interface ) ) {
			if( document.classList === undefined ) {
				document.querySelector('#fullscrn').className = ( "supported" );
			}
			else {
				document.querySelector('#fullscrn').classList.add( "supported" );
			}
			document.querySelector('#fullscrn').innerHTML = fullScreenElement_API_interface + " and " +  fullScreenEnabled_API_interface + " are presently accessible";
		}
		else {
			document.querySelector('#fullscrn').innerHTML = " are not presently accessible";
		}

		if( !!( cancelFullScreen_API_interface ) ) {
			if( document.classList === undefined ) {
				document.querySelector('#cnclfullscreen').className = ( "supported" );
			}
			else {
				document.querySelector('#cnclfullscreen').classList.add( "supported" );
			}
			document.querySelector('#cnclfullscreen').innerHTML = cancelFullScreen_API_interface + " is supported";
		}
		else {
			document.querySelector('#cnclfullscreen').innerHTML = " is not supported";
		}
		
		if( !!( websql_objAPI ) ) {
			if( document.classList === undefined ) {
				document.querySelector('#websql').className = ( "supported" );
			}
			else {
				document.querySelector('#websql').classList.add( "supported" );
			}
			document.querySelector('#websql').innerHTML = " is supported";
		}
		else {
			document.querySelector('#websql').innerHTML = " is not supported";
		}

		if( !!( ixdb_objAPI ) ) {
			var ixdb_IDBTransaction = DRYOBJ.ReturnProps.RetPropertyRoutine( "IDBTransaction" , DRYOBJ.RetELs.glow() ); // window.IDBTransaction
			var ixdb_IDBKeyRange = DRYOBJ.ReturnProps.RetPropertyRoutine( "IDBKeyRange" , DRYOBJ.RetELs.glow() ); // window.IDBKeyRange

			if( document.classList === undefined ) {
				document.querySelector('#idxdb').className = ( "supported" );
			}
			else {
				document.querySelector('#idxdb').classList.add( "supported" );
			}
			document.querySelector('#idxdb').innerHTML = "" + ixdb_objAPI + ", " + ixdb_IDBTransaction + " and " + ixdb_IDBKeyRange + " are supported";
		}
		else {
			document.querySelector('#idxdb').innerHTML = " is not supported";
		}

		if( !!( dragdrop_objAPI ) ) {
			if( document.classList === undefined ) {
				document.querySelector('#dragdrop').className = ( "supported" );
			}
			else {
				document.querySelector('#dragdrop').classList.add( "supported" );
			}
			document.querySelector('#dragdrop').innerHTML = " is supported";
		}
		else {
			document.querySelector('#dragdrop').innerHTML = " is not supported";
		}
		
		if( !!( Blob_objAPI ) ) {
			if( document.classList === undefined ) {
				BBStatsEL.className = ( "supported" );
			}
			else {
				BBStatsEL.classList.add( "supported" );
			}
			BBStatsEL.innerHTML = "Repeating&hellip; " + Blob_objAPI + " is deprecated but supported";
		}
		else {
			BBStatsEL.innerHTML = " not supported";
		}

		if( !!( FileWriter_objAPI ) ) { 
			if( document.classList === undefined ) {
				writerStatsEL.className = ( "supported" );
			}
			else {
				writerStatsEL.classList.add( "supported" );
			}
			writerStatsEL.innerHTML = FileWriter_objAPI + " supported";
		}
		else {
			writerStatsEL.innerHTML = " not supported";
		}

		if( !!( FileReader_objAPI && File_API_interface && FileList_API_interface && Blob_objAPI ) ) {
			if( document.classList === undefined ) {
				readerStatsEL.className = ( "supported" );
			}
			else {
				readerStatsEL.classList.add( "supported" );
			}
			readerStatsEL.innerHTML = FileReader_objAPI + ", " + File_API_interface + ", " + FileList_API_interface + " &amp; " + Blob_objAPI + " are all available!";
		}
		else {
			readerStatsEL.innerHTML = "The File Reader APIs are not fully supported in this browser.";
		}

		if( webstorage_api_bool !== "false" ){
			if( document.classList === undefined ) {
				document.querySelector("#websto").className = ( "supported" );
			}
			else {
				document.querySelector("#websto").classList.add( "supported" );
			}
			document.querySelector("#websto").innerHTML = " is supported";
		}
		else {
			document.querySelector("#websto").innerHTML = " not supported";
		}

		if( geolocation_api_bool !== "false" ){
			if( document.classList === undefined ) {
				document.querySelector("#geolo").className = ( "supported" );
			}
			else {
				document.querySelector("#geolo").classList.add( "supported" );
			}
			document.querySelector("#geolo").innerHTML = " is supported";
		}
		else {
			document.querySelector("#geolo").innerHTML = " not supported";
		}

		if( history_api_bool !== "false" ){
			if( document.classList === undefined ) {
				document.querySelector("#history").className = ( "supported" );
			}
			else {
				document.querySelector("#history").classList.add( "supported" );
			}
			document.querySelector("#history").innerHTML = " is supported";
		}
		else {
			document.querySelector("#history").innerHTML = " not supported";
		}

		if( touch_api_bool !== "false" ){
			if( document.classList === undefined ) {
				document.querySelector("#If_Touch").className = ( "supported" );
			}
			else {
				document.querySelector("#If_Touch").classList.add( "supported" );
			}
			document.querySelector("#If_Touch").innerHTML = " is supported";
		}
		else {
			document.querySelector("#If_Touch").innerHTML = " not supported";
		}

		if(DeviceOrientationEvent_api_bool !== "false" ){
			if( document.classList === undefined ) {
				document.querySelector("#If_DeviceOrientation").className = ( "supported" );
			}
			else {
				document.querySelector("#If_DeviceOrientation").classList.add( "supported" );
			}
			document.querySelector("#If_DeviceOrientation").innerHTML = " is supported";
		}
		else {
			document.querySelector("#If_DeviceOrientation").innerHTML = " not supported";
		}

		if( DPR_bool ){
			document.querySelector("#DPR").innerHTML=actual_DPR;
		}
		else {
			document.querySelector("#DPR").innerHTML="not applicable";
		}

		if( DeviceMotion_api_bool !== "" ){
			if( document.classList === undefined ) {
				document.querySelector("#SupWithDevMotion").className = ( "supported" );
			}
			else {
				document.querySelector("#SupWithDevMotion").classList.add( "supported" );
			}
			document.querySelector("#SupWithDevMotion").innerHTML = " is supported"; 
		}
		else {
			document.querySelector("#SupWithDevMotion").innerHTML = " not supported"; 
		}

		if( listenForDeviceMovement_api_bool !== "" ){ 
			if( document.classList === undefined ) {
				document.querySelector("#SupWithMoveListen").className = ( "supported" );
			}
			else {
				document.querySelector("#SupWithMoveListen").classList.add( "supported" );
			}
			document.querySelector("#SupWithMoveListen").innerHTML = " is supported"; 
		} 
		else { 
			document.querySelector("#SupWithMoveListen").innerHTML = " NOT supported"; 
		} 

		if( !!( websocket_bool ) ) { 
			if( document.classList === undefined ) {
				document.querySelector( '#websocket' ).className = ( "supported" );
			}
			else {
				document.querySelector( '#websocket' ).classList.add( "supported" );
			}
			document.querySelector( '#websocket' ).innerHTML = " is supported";
		}
		else {
			document.querySelector( '#websocket' ).innerHTML = " not supported";
		} 

		/*
		if( ( webworker_bool === "false" ) || ( !Worker ) ) {
			document.querySelector( '#webworker' ).innerHTML = " is not supported";
		}
		
		if( !!( webworker_bool ) ) { 
			if( document.classList === undefined ) {
				document.querySelector( '#webworker' ).className = ( "supported" );
			}
			else {
				document.querySelector( '#webworker' ).classList.add( "supported" );
			}
			document.querySelector( '#webworker' ).innerHTML = " is supported";
		}
		else {
			document.querySelector( '#webworker' ).innerHTML = " is not supported";
		}
		*/

		/**/ 
		if( !!( promise_bool ) ) { 
			if( document.classList === undefined ) {
				document.querySelector( '#promise' ).className = ( "supported" );
			}
			else {
				document.querySelector( '#promise' ).classList.add( "supported" );
			}
			document.querySelector( '#promise' ).innerHTML = " are supported";
		}
		else {
			document.querySelector( '#promise' ).innerHTML = " are not supported";
		}

		if( !!( performance_objAPI ) ) {
			
			// window.performance.timing
			// console.log( 'window[performance_objAPI][timing_perfAPI_interface]' , window[performance_objAPI][timing_perfAPI_interface] );

			// window.performance.memory
			// console.log( 'window[performance_objAPI][memory_perfAPI_interface]' , window[performance_objAPI][memory_perfAPI_interface] );
			
			// window.performance.now()
			// console.log( 'window[performance_objAPI][now_method_perfAPI_prefix]()' , window[performance_objAPI][now_method_perfAPI_prefix]() );

			if( !!( timing_perfAPI_interface ) ) {
				if( document.classList === undefined ) {
					document.querySelector('#perftim').className = ( "supported" );
					document.querySelector('#timinglog').className = ( "supported" );
				}
				else {
					document.querySelector('#perftim').classList.add( "supported" );
				}
				document.querySelector('#perftim').innerHTML = "performance." + timing_perfAPI_interface + " supported";

				var timingObj = window[performance_objAPI][timing_perfAPI_interface];
				// console.log( "timingObj" , timingObj );

				document.querySelector('#timinglog').innerHTML = "Timing Log: ";
				document.querySelector('#timinglog').innerHTML += "<ul>";
				
				document.querySelector('#timinglog').innerHTML += "<li>Response time ~ " + ( Math.abs( (timingObj.responseStart - timingObj.requestStart ) ) ) + "ms " + "</li>";

				document.querySelector('#timinglog').innerHTML += "<li>Download response ~ " + ( Math.abs( (timingObj.responseEnd - timingObj.responseStart ) ) ) + "ms " + "</li>";

				document.querySelector('#timinglog').innerHTML += "<li>Handle DOMContentLoaded ~ " + ( Math.abs( (timingObj.domContentLoadedEventEnd - timingObj.domContentLoadedEventStart )  ) ) + "ms " + "</li>";

				// document.querySelector('#timinglog').innerHTML += "<li>Build DOM ~ " + ( Math.abs( (timingObj.loadEventStart - timingObj.responseEnd ) ) ) + "ms " + "</li>";

				document.querySelector('#timinglog').innerHTML += "<li>Handle onLoad ~ " + ( Math.abs( (timingObj.loadEventEnd - timingObj.loadEventStart )  ) ) + "ms " + "</li>";

				// document.querySelector('#timinglog').innerHTML += "<li>Page load ~ " + ( Math.abs( (timingObj.loadEventEnd) - (timingObj.navigationStart) ) ) + "ms " + "</li>";

				document.querySelector('#timinglog').innerHTML += "</ul>";
			}
			else {
				document.querySelector('#perftim').innerHTML = " not supported";
			}


			if( !!( memory_perfAPI_interface ) ) {
				if( document.classList === undefined ) {
					document.querySelector('#perfmem').className = ( "supported" );
					document.querySelector('#memorylog').className = ( "supported" );
				}
				else {
					document.querySelector('#perfmem').classList.add( "supported" );
				}
				document.querySelector('#perfmem').innerHTML = "performance." + memory_perfAPI_interface + " supported";

				var memoryObj = window[performance_objAPI][memory_perfAPI_interface];
				// console.log( "memoryObj" , memoryObj );

				document.querySelector('#memorylog').innerHTML = "Memory Log: ";
				document.querySelector('#memorylog').innerHTML += "<ul>";
				
				document.querySelector('#memorylog').innerHTML += "<li>Heap Size Limit ~ " + ( Math.abs( (memoryObj.jsHeapSizeLimit) ) ) + " " + "</li>";
				
				// document.querySelector('#memorylog').innerHTML += "<li>Used Heap Size ~ " + ( Math.abs( (memoryObj.usedJSHeapSize) ) ) + " " + "</li>";
				
				// document.querySelector('#memorylog').innerHTML += "<li>Total Heap Size ~ " + ( Math.abs( (memoryObj.totalJSHeapSize) ) ) + " " + "</li>";
				
				document.querySelector('#memorylog').innerHTML += "</ul>";
				
			}
			else {
				document.querySelector('#perfmem').innerHTML = " not supported";
			}


			if( !!( now_method_perfAPI_prefix ) ) {
				if( document.classList === undefined ) {
					document.querySelector('#perfnow').className = ( "supported" );
				}
				else {
					document.querySelector('#perfnow').classList.add( "supported" );
				}
				document.querySelector('#perfnow').innerHTML = "performance." + now_method_perfAPI_prefix + "() supported";
			}
			else {
				document.querySelector('#perfnow').innerHTML = " not supported";
			}
			if( document.classList === undefined ) {
				document.querySelector("#If_Performance").className = ( "supported" );
			}
			else {
				document.querySelector("#If_Performance").classList.add( "supported" );
			}

			document.querySelector("#If_Performance").innerHTML = "window." + performance_objAPI + " supported";	
		}

		else {
			document.querySelector("#If_Performance").innerHTML = "NavigationTimingAPI not supported";
		}

		if( !!( URL_objAPI ) ) {
			if( document.classList === undefined ) {
				GLOWurl.className = ( "supported" );
			}
			else {
				GLOWurl.classList.add( "supported" );
			}
			GLOWurl.innerHTML = "window." + URL_objAPI + "() supported";
		}
		else {
			GLOWurl.innerHTML = " not supported";
		}

		if( !!( getUserMedia_objAPI ) ) {
			if( document.classList === undefined ) {
				document.querySelector('#getUserMedia').className = ( "supported" );
			}
			else {
				document.querySelector('#getUserMedia').classList.add( "supported" );
			}
			document.querySelector('#getUserMedia').innerHTML = "navigator." + getUserMedia_objAPI + "() supported";
		}
		else {
			document.querySelector('#getUserMedia').innerHTML = " not supported";
		}

		if( !!( serviceworker_bool ) ) { 
			if( document.classList === undefined ) {
				document.querySelector( '#svcwrkr' ).className = ( "supported" );
			}
			else {
				document.querySelector( '#svcwrkr' ).classList.add( "supported" );
			}
			document.querySelector( '#svcwrkr' ).innerHTML = " is supported";
		}
		else {
			document.querySelector( '#svcwrkr' ).innerHTML = " is not supported";
		} 

		if( !!( fetch_bool ) ) { 
			if( document.classList === undefined ) {
				document.querySelector( '#fetch' ).className = ( "supported" );
			}
			else {
				document.querySelector( '#fetch' ).classList.add( "supported" );
			}
			document.querySelector( '#fetch' ).innerHTML = " is supported";
		}
		else {
			document.querySelector( '#fetch' ).innerHTML = " is not supported";
		} 

		if( !!( imports_bool ) ) { 
			if( document.classList === undefined ) {
				document.querySelector( '#imports' ).className = ( "supported" );
			}
			else {
				document.querySelector( '#imports' ).classList.add( "supported" );
			}
			document.querySelector( '#imports' ).innerHTML = " are supported";
		}
		else {
			document.querySelector( '#imports' ).innerHTML = " are not supported";
		}

		if( !!( templates_bool ) ) { 
			if( document.classList === undefined ) {
				document.querySelector( '#templates' ).className = ( "supported" );
			}
			else {
				document.querySelector( '#templates' ).classList.add( "supported" );
			}
			document.querySelector( '#templates' ).innerHTML = " are supported";
		}
		else {
			document.querySelector( '#templates' ).innerHTML = " are not supported";
		}

		if( !!( custelmts_bool ) ) { 
			if( document.classList === undefined ) {
				document.querySelector( '#custelmts' ).className = ( "supported" );
			}
			else {
				document.querySelector( '#custelmts' ).classList.add( "supported" );
			}
			document.querySelector( '#custelmts' ).innerHTML = " are supported";
		}
		else {
			document.querySelector( '#custelmts' ).innerHTML = " are not supported";
		}

		if( !!( shdwdom_bool ) ) { 
			if( document.classList === undefined ) {
				document.querySelector( '#shdwdom' ).className = ( "supported" );
			}
			else {
				document.querySelector( '#shdwdom' ).classList.add( "supported" );
			}
			document.querySelector( '#shdwdom' ).innerHTML = " is supported";
		}
		else {
			document.querySelector( '#shdwdom' ).innerHTML = " not supported";
		} 
		/**/

		
		// console.log( "DCL" );
	}
	
	return {
		
		InitDCL: function() {
			return _DOMCONLO(); 
		} // window.Gh_pages_Apis.InitDCL()

	};

} )(); // window.Gh_pages_Apis

DRYOBJ.Utils.evt_u.AddEventoHandler( window , "DOMContentLoaded" , Gh_pages_Apis.InitDCL() ); 