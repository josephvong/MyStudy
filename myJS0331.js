﻿/*
Index：
*加载/事件类自定义函数：
# addLoadEvent():取代window.onload函数，使页面可以一次加载多个函数
# myAddEvent(obj,sEvent,fn):用于给同一个obj的同一个事件添加多个函数。参数：obj，sEvent：事件名（load/scroll click等，不能有"on"在前面），执行的函数。该函数可使用不同浏览器
# fireEvent(obj,events)：触发自定义事件函数，当使用“myAddEvent()”函数进行“自定义事件”添加后，需要通过以下函数“fireEvent” 来触发自定义事件。
# WheelDir(oEvent)：判断鼠标滑轮滚动的上下方向，返回布尔值。 若为true，表示向下滚动。函数参数为事件对象“oEvent”
# addScrollEvent()：滚轮事件触发函数：参数有两个：第一个参数为接收滚轮事件的obj， 第二个为数组，数组元素为两个（滚轮向上的事件函数，向下的事件函数）。用法：addScrollEvent(obj,[fnUp,fnDown])
# inpChange(obj,fn)：不同浏览器兼容“oninput”/“onpropertychange”事件的函数，参数obj为“input”对象，fn为“oninput”事件持续触发的函数。

*css类自定义函数
# addClass():给某对象添加第二个class的css
# removeClass():给某对象删除指定class, 用法： addClass(obj,"ClassName")
# getStyle()：参数为获取对象和css属性，是对所有浏览器获取当前非行间样式方法的兼容版本。
# useCss():可变参数函数，obj、attr必须，可获取对象某个css的值value。如果参数中添加value，可对css进行修改 （需要调用上面getStyle()函数）
# SetAbsPosit(objs)：转换布局函数：将原本没有绝对定位的页面对象转变为绝对定位（使每个对象有自己的left、top且定位为absolute）。参数objs为一个由对象组成的数组，如一串li标签、div标签、img标签
# getPos(obj): 该函数用于获取当前页面中某个元素离body的left和top距离。 无论这个元素外面有多少个有定位的父级元素，都可使用。参数为要检测的obj
# getTop(obj)： 获取 obj离整个HTML文件顶端的offsetTop值（总高度），参数为要获取总offsetTop的对象。

*获取对象类自定义函数：
# getByClass: 同理于getElementsByClassName(这个方法部分浏览器不支持)

*日期自定义函数：
# toDouble(date)：让日期（或数字）输出为字符串，且小于10的个位数以0x输出。
# Chnday(day)：获得中文星期几（参数为dateobj.getDay()）
# isLeapYear(year) 判断是否闰年的方法，返回 true(是闰年)/false， 参数为一个年份
# toTime(oHour,oMin,oSec)：函数计算时针/分针/秒针角度的函数，参数（oHour,oMin,oSec）分别为代表时分秒针的对象标签，本函数要点为时间时分秒数值转化为角度的算法

*数字自定义函数
# Find_Max(arr): 返回数组arr的最大值，以及最大值的index。最大值为：Find_Max(arr).value；最大值index为：Find_Max(arr).index 。参数arr为要查找的数组
# Find_Min(arr): 返回数组arr的最小值，以及最小值的index。最小值为：Find_Min(arr).value；最小值index为：Find_Min(arr).index 。参数arr为要查找的数组
# arrIndexOf(arr,v)函数： 查找v在数组内的index值。 参数：arr是查找的数组， v是目标值
# RandomArr(n,m,b)随机数组返回函数：随机返回一个元素范围在数字n-m之间的数组，数组长度随机，（如果有参数b，则长度为b）
# CreateArr(iAll,iNow)随机数组返回函数：随机返回一个元素范围在数字0-iAll之间的数组，数组长度iNow
#quickSort(arr,flag) 快速排序函数。参数： arr为要排序的数组（仅限数字），flag为可选参数，flag=true时由小往大排，flag没有或者“false”时，由大往小排


*运动模块函数（速度控制类型）：
# doMove ( obj, attr, dir, target,fn ): 运动函数，最基础的匀速运动函数，可自行调节速度
# Move(obj,json,fn):参数为"要运动的对象"，json对象集(css属性:target值,css属性2:target值)，和一个函数（函数为非必要参数）。当运动结束后，运行该函数。
# Expand(obj,pace)：参数为对象与x轴扩大量。从中心扩大一定量的运动函数，需要调用Move()(完美运动模块)
# BncMove(obj,json,fn): 弹性运动效果函数。参数为obj：对象; json: 目前只能放{left:target值} 和 {top:target值}，fn：非必要参数，运动停止后执行的函数。 json内的left和top要有 target目标值。
# Shot(obj,paceX,paceY)：模拟投掷函数：发射+重力+弹力+摩擦力，与G_Move(paceX,paceY,speed,obj,ground)效果一样
# Drag(id):完美拖拽函数： 参数id为被拖拽的元素的Id。（有个非必要参数为拖拽物体的区域）
# DragPro(id):完美拖拽函数： 参数id为被拖拽的元素的Id. 可以计算物体运动速度，然后选择调用投掷函数Shot()。（有个非必要参数为拖拽物体的区域）
# CrashTest(obj1,obj2): 碰撞检测函数，参数为两个碰撞检测对象obj1,obj2，返回值为：碰撞为true，没碰为false。
# getDis(obj1,obj2)：获取两个对象中心点之间的距离（获取一个数）参数为两个对象。
# MousDir(obj,e)：获取鼠标离某对象中心点之间的距离，参数obj为检测对象，e为事件onmousemove中的event对象。
# SideAd(obj,O_Bottom)：侧边栏广告滑动函数；参数：obj-运动（广告）模块，oBottom-运动模块离浏览器可视区域底部的距离。该函数可以检测浏览器 scrollBar 的（上下）滚动方向
# KeyDownMove(id): 键盘控制div移动函数，参数为移动对象或对象id（无卡顿），无边界限制。
# Shake(obj,attr,endFn)：震动函数，让对象水平或纵向震动。参数：obj（震动对象），attr（属性：left/top），endFn（回调函数）
# fnShake():连续两次（不同方向）震动函数：依附震动函数Shake()使用
# StopMove(obj)： 停止对象的计时器函数（计时器的名必须为“timer”）， 参数为对象
# 鼠标滑轮事件 + 模拟滑动条：非函数 供参考用*X*

*时间控制运动函数：
# startMove(obj,json,times,fx,fn): 时间控制型运动框架函数（对应Move()为“速度控制型”运动框架），根据时间的长短来完成指定的运动过程。
# Tween算法的运动效果参数列表：
# Tween算法的json集合。

妙味运动框架：
# css(obj, attr, value)：相当于“getStyle()方法”
# miaovStartMove(obj, oTarget, iType, fnCallBack, fnDuring)：妙味运动函数：参数oTarget：json{attr:value}； iType:运动形式(MIAOV_MOVE_TYPE.BUFFER缓冲/ MIAOV_MOVE_TYPE.FLEX弹性)
# miaovDoMoveBuffer(obj, oTarget, fnCallBack, fnDuring)：缓冲函数
# miaovDoMoveFlex(obj, oTarget, fnCallBack, fnDuring)：弹力函数


*cookie 操作类：
# setCookie(name, value, iDay)：设置cookie的函数；三个参数：cookie名；cookie值，过期日期
# getCookie(name)：获取cookie （获取name的值）；该函数的参数为 name（cookie的name）
# removeCookie(name)：删除cookie；//参数为待删除的cookie name

*HTML标签显示自定义函数
# displayAbbreviations()：显示HTML文件中<abbr>标签内容的函数。无参数。可以在事件里进行调用，或者使用函数addLoadEvent(displayAbbreviations)进行调用。获取到的内容会显示在页面的最末尾。
# displayCita(): 显示HTML文档中blockquote标签中的cite连接（引用文档连接）的函数，无参数。可以在事件里进行调用，或者使用函数addLoadEvent(displayCita)进行调用。获取到的内容会以上标的形式出现在标签内容末尾。注意：使用该函数时请确保<blockquote>标签内没有其他的标签。
# displayShortCut():显示HTML文件中<a>标签里面accesskey属性值（快捷方式）的函数。无参数。可以在事件里进行调用，或者使用函数addLoadEvent(displayShortCut)进行调用。获取到的内容会显示在页面的最末尾。

*DOM 特定对象函数
# Alter_Switch_Color(obj,color1,color2): 表格各行变色且鼠标覆盖变色函数，使表格不但可以各行变色，且当鼠标移入某行时，该行变色。
   参数obj：表格对象（必须是表格）， color1：用于各行区分的颜色， color2：鼠标覆盖表格行时的颜色。
# insertAfter(new_obj, inser_obj)将新创建的“obj”元素放到指定的"target_obj"元素之后。

*正则表达式方法：
# trim(str):取出字符串首尾空格的方法,参数是 待处理的字符串
# FaceCode(str)表情代码解码函数： 用于对字符串中的表情符号代码进行解码。用于可发表情的输入框程序。参数 str：待解吗字符串。表情代码必须以：“[图片名]” 形式， 返回一个图片的html标签。

*字符串方法：
# getIndex(str,search,i): 返回字符串str 内 某个字符“search” 的位置。可以控制从字符串的第i个字符开始搜索。返回结果为“search”出现位置组成的数组、
   参数： str：要搜索的字符串， search：目标字符 ， i数组的第i位
# detectNum(str)： 检测字符串是不是全部由数字组成，参数 str为待检测的字符串。 返回true/false
# firstLetterUpper(str)： 首字母大写函数，参数为字符串对象“str”
# trim(str)：自动检测字符串首尾空格，并删除首尾空格
# toCamelStyle(str)：字符串转为驼峰写法的函数。
# removeNum(str)：清除字符串中间数字函数
# reverse(str)： 字符串反向输出函数
# caculateExistNum(str)：计算字符串中每个字符出现次数的函数，输出一个json

*Canvas ImageData方法
# getXY(obj,x,y):获取图像内单个坐标点的(rgba)
# setXY(obj,x,y,color):设置图像内单个坐标点的(rgba)， 参数“color”以(r,g,b,a)形式出现。
# Mosak(obj,id,n)：将canvas内图像转换为马赛克效果：参数：obj(预加载的图片对象)，id(canvas标签的“id”)，n(马赛克每个小格的大小，越大越模糊)
# toMosak(id,n): 马赛克处理函数简化版，使用场景：当canvas内已经存在图像时使用。参数：id为canvas标签的id，n(马赛克每个小格的大小，越大越模糊)

*文字选择方法：
# selectText()：解决兼容性的文字选择函数： 返回内容为选中的文字
# getStrLen(str): 检验字符串中所有双字节的字符（如中文），并返回字符串的实际字节长度（将双字节字符长度（length）*2）。参数“str”：需要检测的字符串

*CSS3样式设置 / CSS特效 函数：
# getXY(iR,iDeg)：获取直角三角形中直角边长度的函数。 参数：iR（斜边长度），iDeg（指定角的角度），返回json:{x:n,y:m}
# addEnd(obj,fn)：捕获CSS3中“transition”（过渡）属性停止后触发的“transitionend”事件兼容函数，参数：obj是过渡属性作用的对象，fn为过渡结束后的回调函数。
# addEnd(obj,fn)函数中如果回调函数再次改变obj的样式，obj的transition属性会再次生效，并且促发“transitionend”事件，调用fn函数，形成一个死循环。需要在回调函数中使用“removeEnd(obj,fn)”打破循环
# removeEnd(obj,fn)：使用在“addEnd(obj,fn)”的回调函数“fn”里面，用于解除连续触发“transitionend”事件的死循环。
# toRotate(obj,iDeg)：对CSS3中的“transform”属性中的Matrix（矩阵）进行修改形成旋转效果的封装函数。参数：obj（transform属性的对象），iDeg旋转角度（顺时针为正）
# flicker(obj,x,color): 闪烁方法：让对象obj的“background”变色闪动的函数。参数：obj为闪动对象，x为闪动次数，color为闪动颜色（字符串）


*/

//获取对象类自定义函数：-------------------------------------------------------------------------
//getByClass: 同理于getElementsByClassName(这个方法部分浏览器不支持,而且此方法为静态方法，仅document可用)
function getByClass(oParent,sClass){
	var aResult=[];   // 在js内，一些特殊字符串要输出，前面要添加一个"\"来转意， 此处使用“\b”时，他前面的"\"要用多一个"\"来转意
	var re=new RegExp('\\b'+sClass+'\\b','i'); //此正则表达式需要传参，因此需要用正规写法
	// 若写成“/\bsClass\b/”（非正规形式）表示获取“sClass”这个字符串，而非“sClass”变量的字符串。
		var aEle=oParent.getElementsByTagName('*');
		for (var i=0;i<aEle.length ;i++ )
		{
			if (re.test(aEle[i].className))
			{
				aResult.push(aEle[i]);
			}
		}

	return aResult;
}


//extend()函数：对象/json覆盖函数，将new_obj（json）的内容轮询后逐个放置到old_obj（json）里面。该函数用于面向对象的继承和组件开发中的配置参数覆盖
function extend(old_obj,new_obj){
	for(var attr in new_obj){
		old_obj[attr] = new_obj[attr];
	}
}

//加载类事件自定义函数：-------------------------------------------------------------------------
//addLoadEvent():取代window.onload函数，使页面可以一次加载多个函数

function addLoadEvent(fun){
	var oldonload=window.onload;
	if (typeof window.onload!='function')
	{
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}

//myAddEvent(obj,sEvent,fn):用于给同一个obj的同一个事件添加多个函数。参数：obj，sEvent：事件名（load/scroll click等，不能有"on"在前面），执行的函数。该函数可使用不同浏览器
//使用方法：假设函数"aa"和函数"bb"都要通过点击（click）对象“oBtn”执行，则用myAddEvent()函数对aa 和bb 函数各绑定一次：myAddEvent(oBtn,"click",aa); myAddEvent(oBtn,"click",bb);
//附加功能，在事件绑定的函数中，只需要return false， 则可以自动阻止冒泡和默认事件。
//可以进行“自定义事件”的绑定
function myAddEvent(obj,sEv,fn){
     obj.listeners=obj.listeners||{};
     obj.listeners[sEv]=obj.listeners[sEv]||[];  //在“listener”对象（json）内，创建一个对应“event”自定义事件（普通）的数组
     obj.listeners[sEv].push(fn); //将绑定该事件/自定义事件的 回调函数 放入到 该 事件所对应的数组内。
     if (obj.nodeType) //需要判断当前的“obj”是否为“DOM”对象
     {
          if (obj.attachEvent) //IE下的绑定事件方式
          {
               obj.attachEvent("on"+sEv,function(){
                    if (false==fn.call(obj))//使用call()方法重新指定fn中this的指向。
                    {
                         event.cancelBubble=true;  return false;
                    }
               });
          }else{
               obj.addEventListener(sEv,function(ev){
                    if (false==fn.call(obj))
                    {
                         ev.cancelBubble=true;  ev.preventDefault();
                    }
               },false);
          }
     }
}

//fireEvent(obj,events)：触发自定义事件函数，当使用“myAddEvent()”函数进行“自定义事件”添加后，需要通过以下函数“fireEvent” 来触发自定义事件。
function fireEvent(obj,events){
	if (obj.listeners && obj.listeners[events])
	{
		for (var i=0;i<obj.listeners[events].length ;i++ )
		{
			obj.listeners[events][i]();  //让 obj对象中“listener”属性对象内的“events”数组内添加的各个方法逐个执行。
		}
	}
}

//WheelDir(oEvent)：判断鼠标滑轮滚动的上下方向，返回布尔值。 若为true，表示向下滚动。
//函数使用在绑定（滚轮）事件的函数中，参数为该事件对象（oEvent）。在事件函数中判断真/假。
function WheelDir(oEvent){
	var bDown=true;
		if (oEvent.wheelDelta)
		{
			if (oEvent.wheelDelta<0)
			{
				bDwon=true;
			}else{
				bDown=false;
			}
		}else{
			if (oEvent.detail>0)
			{
				bDown=true;
			}else{
				bDown=false;
			}
		}
		return bDown;
}


//addScrollEvent()：滚轮事件触发函数：参数有两个：第一个参数为接收滚轮事件的obj， 第二个为数组，数组元素为两个（滚轮向上的事件函数，向下的事件函数）
//用法：addScrollEvent(obj,[fnUp,fnDown])
function addScrollEvent(){
	var obj=arguments[0]; //函数的第一个参数为obj
	var functionSet=arguments[1]; //函数的第二个参数为一个数组，数组内存放两个函数对象（滚轮向上/向下的行为函数）
	//封装一个鼠标滚轮的事件函数“scrollEvent()”
	function scrollEvent(e){
		var oEvent=e||event;
		var down=false; //设置滚轮向下的标识值
		if (oEvent.wheelDelta){
			if (oEvent.wheelDelta<0){down=true;}else{down=false;}
		}else {
			if (oEvent.detail>0){down=true;}else{down=false;}
		}
		//如果down为true时，执行参数2数组中的第一个函数（滚轮向下时的行为），否则执行数组中的第二个函数
		if (down){functionSet[0]();}else{functionSet[1]();}
		if (oEvent.preventDefault){oEvent.preventDefault();} //阻止鼠标滚轮的默认事件
		return false; //阻止鼠标滚轮的默认事件
	}
	/*if (obj.addEventListener){obj.addEventListener("DOMMouseScroll",scrollEvent,false);}
	obj.onmousewheel=scrollEvent;*/
	myAddEvent(obj,"DOMMouseScroll",scrollEvent)	//需要使用“myAddEvent()”事件绑定函数
	myAddEvent(obj,"mousewheel",scrollEvent)
}

//inpChange(obj,fn)：不同浏览器兼容“oninput”/“onpropertychange”事件的函数，参数obj为“input”对象，fn为“oninput”事件持续触发的函数。
function inpChange(obj,fn){
	var ie=!-[1,]; //判断是否ie浏览器的表达式
	if (ie)
	{
		obj.onpropertychange=fn;
	}else{
		obj.oninput=fn;
	}
}


//css类自定义函数 -------------------------------------------------------------------------
//addClass():给某对象添加class, 用法： addClass(obj,"ClassName")
function addClass(obj, className){ //函数参数为要添加类的对象 、 类名
	if (obj.className=="")
	{
		obj.className=className;
	}else{
		var arrClassName=obj.className.split("");
		var _index=arrIndexOf(arrClassName,className);
		if (_index==-1)
		{
			obj.className+=" "+className;
		}
	}
}

//removeClass():给某对象删除指定class, 用法： addClass(obj,"ClassName")
function removeClass(obj,className){
	if (obj.className!="")
	{
		var arrClassName=obj.className.split(" ");
		var _index=arrIndexOf(arrClassName,className);
		if (_index !=-1)
		{
			arrClassName.splice(_index,1);
			obj.className=arrClassName.join(" ");
		}
	}

}



//getStyle()：获取对象当前css属性值的函数。参数为获取对象和css属性，是对所有浏览器获取当前非行间样式方法的兼容版本。
function getStyle(obj,attr){//解决兼容问题的样式提取（只能提取单一样式）
	if (obj.currentStyle)
	{
		return obj.currentStyle[attr]; //currentStyle：IE获取对象非行间样式
	}else{
		return getComputedStyle(obj,false)[attr];//getComputedStyle：FF获取对象非行间样式
	}											// 该函数仅获取单一样式，复合样式如background无效
}
/*getStyle() 使用要注意的问题：
1. 该函数仅获取单一样式，复合样式如background无效
2. 获取颜色属性值时，IE（currentStyle）会获取颜色名称，FF（getComputedStyle）会获取颜色的组成数据“（0,0,64）” 不能用来做判断。
3. getStyle中的attr参数字符串不能有空格
4. 尽量不要用getStyle去获取未用CSS自行设置的样式。（因为不同浏览器有不同的自定义样式）
*/


//useCss():可变参数函数，obj、attr必须，可获取对象某个css的值value。如果参数中添加value，可对css进行修改
function useCss(obj,attr,value){ //该函需要使用上面getStyle函数
	if (arguments.length==2)
	{
		return getStyle(obj,attr);
	}else if (arguments.length==3)
	{
		obj.style[attr]=value;
	}
}

//SetAbsPosit(objs)：转换布局函数：将原本没有绝对定位的页面对象转变为绝对定位（使每个对象有自己的left、top且定位为absolute）。参数objs为一个由对象组成的数组，如一串li标签、div标签、img标签，且可以将包含所有元素的top/left的数组返回。
//PS：返回的数组以“json”为元素，json的内容为{"left":x,"top":y}
function SetAbsPosit(objs){
	var aPos=[];
	for(var i=0;i<objs.length;i++)
	{
		aPos[i]={left: objs[i].offsetLeft, top: objs[i].offsetTop};
	}

	for(var i=0;i<objs.length;i++)
	{
		objs[i].style.left=aPos[i].left+'px';
		objs[i].style.top=aPos[i].top+'px';

		objs[i].style.position='absolute';
		objs[i].style.margin="0";
	}
	return aPos;
}

/*SetAbsPosit=function(objs){
	var aPos=[];
	objs.each(function(i,elem){
		aPos[i]={left: $(elem).position().left, top: $(elem).position().top};
	});
	objs.each(function(i,elem){
		$(elem).css({"left":aPos[i].left,"top":aPos[i].top,"position":"absolute","margin":0});
	});
	return aPos;
}
*/
//getPos(obj): 该函数用于获取当前页面中某个元素离body的left和top距离。 无论这个元素外面有多少个有定位的父级元素，都可使用。参数为要检测的obj
//用法：如果要获得json内的值可以用“var L=getPos(obj).left / var T=getPos(obj).top” 来获取
function getPos(obj) {
          var pos = {left:0, top:0}; // 用一个json储存要获得的left 和 top
          while (obj) { //用while循环不断获取当前obj自己以及其父级的offsetLeft/Top
               pos.left += obj.offsetLeft; // 让json内的元素不断累加这些数值
               pos.top += obj.offsetTop;
               obj = obj.offsetParent;
          }     //直至obj的父级全部循环完毕
          return pos;  //返回结果
     }


//getTop(obj) // 获取 obj离整个HTML文件顶端的offsetTop值（总高度），参数为要获取总offsetTop的对象。
function getTop(obj) {
		var iTop = 0;
		while(obj) {
			iTop += obj.offsetTop;  //obj的当前offsetTop值
			obj = obj.offsetParent; //循环让obj的父级取代obj，再计算其父级的offsetTop。
		}							//一路循环直到最顶层
		return iTop;
	}


//运动模块函数（可以同时执行多个任意属性改变的动作）-------------------------------------------------------------------------

//doMove ( obj, attr, dir, target，fn ): 匀速运动函数，最基础的运动函数，可自行调节速度 ，可改变透明度
//参数为：obj运动对象； attr属性（top/left）；dir速度；target目标值；endfn回调函数
function doMove ( obj,attr,dir,target,endFn ) {
	clearInterval( obj.timer );
	obj.timer = setInterval(function () {
		var iCur=0;
		if (attr=="opacity") { iCur=parseInt(parseFloat(getStyle( obj, attr ))*100); }
		else{ iCur=parseInt(getStyle( obj, attr )); }

		var iSpeed=0;
		if (target-iCur>0) { iSpeed=iCur+dir; }else{ iSpeed=iCur-dir; }

		if (target-iCur>0 && iSpeed>target || target-iCur<0 && iSpeed<target)
		{iSpeed=target;}

		if (attr=="opacity")
		{
			obj.style.filter="alpha(opacity:"+iSpeed+")";
			obj.style.opacity=iSpeed/100;
	     }else{
			obj.style[attr]=iSpeed+"px";
	     }

		if ( iSpeed == target ) {
			clearInterval( obj.timer );
			if (endFn){endFn.call(obj);} /*endFn && endFn(); 等价于if(){}写法*/
		}
	}, 30);

}
/* doMove()函数基础版
function doMove ( obj, attr, dir, target, endFn ) {
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	clearInterval( obj.timer );
	obj.timer = setInterval(function () {
		var speed = parseInt(getStyle( obj, attr )) + dir;			// 步长
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		obj.style[attr] = speed + 'px';
		if ( speed == target ) {
			clearInterval( obj.timer );
			if (endFn){endFn.call(obj);} //endFn && endFn(); 等价于if(){}写法
		}
	}, 30);
}
*/


//Move(obj,json,fn):参数为"要运动的对象"，json对象集(css属性:target值,css属性2:target值)，和一个函数（函数为非必要参数）。当运动结束后，运行该函数。
function Move(obj, json, fn) //json内存放 attr（属性）和 该属性的目标值（target）
{
	clearInterval(obj.timer);
	//编辑计时器循环执行一个函数：
	obj.timer=setInterval(function (){
		var bStop=true;		//1.设置一个flag变量 为true 用于判断
		//2.轮询参数的json
		for(var attr in json)// 以下为在循环json中执行的代码
		{
			var iCur=0; //3. 创建一个变量iCur：用来存放对象的当前值
			//4.判断attr：若是opacity：
			if(attr=='opacity')
			{	//这是属性为“opacity”的当前值
				iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
			}
			else
			{	//属性非“opacity”的当前值（所有可用“px”作为数量单位的属性值）
				iCur=parseInt(getStyle(obj, attr));
			}

			//5.算速度
			var pace=(json[attr]-iCur)/8;//json:{attr1:XXX,attr2:YYY}-->json[attr1]==XXX
			pace=pace>0?Math.ceil(pace):Math.floor(pace);//将速度值取整

			//7.检测停止：一旦各项属性值到达json里面的目标值，返回“false”
			if(iCur!=json[attr])//当有一个属性的iCur值未到达json里面的target值时
			{
				bStop=false;  // 之前设的flag变量 变为 false
			}

			//6. 在循环中，让iCur的值以pace的速度缓冲运动（该部分只要“iCur!=json[attr]”则会一直运行）
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(iCur+pace)+')';
				obj.style.opacity=(iCur+pace)/100;
			}
			else
			{
				obj.style[attr]=iCur+pace+'px';
			}
		}
		//8. 判断上面循环中的bStop的值：
		if(bStop) //当bStop为true，证明对象的所有属性都达到target值
		{
			clearInterval(obj.timer); //停止计时器循环执行
			if(fn)	//运动停止，判断函数是否有fn参数，该参数是个函数
			{
				//fn.call(obj); //若有则运行fn参数的函数。
				//fn;
				fn.call(obj);//--> 这是为了可以在回调函数内调用事件触发的“this”对象。
			}
		}
	}, 30)
}



//Expand(obj,pace)：参数为对象与x轴扩大量。从中心扩大一定量的运动函数，需要调用Move()(完美运动模块)
function Expand(obj,pace){
		var x=parseInt(getStyle(obj, "width"));
		var y=parseInt(getStyle(obj, "height"));
		var d=parseFloat(x/y);
		var pace=pace;
		var x_2=x+pace; var y_2=Math.ceil((x_2)/d); var gT=Math.floor(-0.5*(y_2-y) ); var gL=Math.floor(-0.5*pace);
		Move(obj,{width:x_2,height:y_2,marginLeft:gL,marginTop:gT});
}


//BncMove(obj,json,fn): 弹性运动效果函数。
//参数为obj：对象; json: 目前只能放{left:target值} 和 {top:target值}，fn：非必要参数，运动停止后执行的函数。 json内的left和top要跟 target目标值。
function BncMove(obj,json,fn){
	var pace=0;
	var distant=0;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		for(var attr in json)
		{
			var iCur=0;
			if(attr=='left')
			{
				iCur=obj.offsetLeft;
			}
			else if(attr=="top")
			{
				iCur=obj.offsetTop;
			}
			pace+=(json[attr]-iCur)/8;
			pace*=0.8;

			if(attr=='left')
			{
				distant=obj.offsetLeft;
			}
			else if(attr=="top")
			{
				distant=obj.offsetTop;
			}

			distant+=pace;
			if (Math.abs(pace)<1&& Math.abs(json[attr]-iCur)<1)
			{
				clearInterval(obj.timer);
				if(fn){	fn.call(obj) }	//运动停止，判断函数是否有fn参数，该参数是个函数,若有则运行fn参数的函数
			}else{
				obj.style[attr]=distant+"px";
			}
		}
	},30)
}

// Shot(obj,paceX,paceY)：模拟投掷函数：发射+重力+弹力+摩擦力，与G_Move(paceX,paceY,speed,obj,ground)效果一样
function Shot(obj,paceX,paceY){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			paceY+=3; //重力效果，运行过程中Y轴速度（paceY）不断加大
			var l=obj.offsetLeft+paceX; var t=obj.offsetTop+paceY; //l和t分别为运动中div的“左边距”和“顶边距”
			if (t>=document.documentElement.clientHeight-obj.offsetHeight)
			{
				paceY*=-0.8; //重力下的反弹效果：接触到底部后Y轴速度为 反方向并减速（乘-0.8）
				paceX*=0.8 // 底部摩擦力效果：接触底部后x轴速度下降，但方向不变
				t=document.documentElement.clientHeight-obj.offsetHeight; //避免运动物体有到达最尽头时出现的一瞬间出界行为。
			}else if (t<=0)
			{
				paceY*=-1;
				paceX*=0.8 // 顶部摩擦力效果：运动对象碰到顶部时，x轴运动速度也会减少（方向不变）
				t=0;
			}

			if (l>=document.documentElement.clientWidth-obj.offsetWidth)
			{
				paceX*=-0.8; //侧面摩擦力效果：接触到侧边框后速度减慢，方向改变
				l=document.documentElement.clientWidth-obj.offsetWidth;//同上理，避免短暂的出界现象。
			}else if (l<=0)
			{
				paceX*=-0.8; //侧面摩擦力效果：接触到侧边框后速度减慢，方向改变
				l=0;
			}
			//由于速度paceX,Y最后有可能成为大于-1的负数，若转化为实际px像素时会出现误差
			if (Math.abs(paceX)<1){	paceX=0; }
			if (Math.abs(paceY)<1){	paceY=0; } //使用绝对值将速度在足够小时（绝对值小于1）直接等于0，避免误差

			obj.style.left=l+"px";
			obj.style.top=t+"px";
		},30)
		//window.alert("b");
	}

//Drag(id):完美拖拽函数： 参数id为被拖拽的元素的Id.和拖拽区域ID
//兼容各版本浏览器解决鼠标选中背景内容的问题。修改两侧最大最小值范围可实现磁性吸附（见下注释）
//参数：必要参数：拖动的对象或其ID，非必要参数 p_id：拖动对象的父级区域对象或其ID（用于限制拖动范围）
//使用备注： 该拖拽函数当区域对象中有事件函数时，需要在拖拽对象中添加相应的事件来阻止行为：
//如 区域对象的事件行为是：oH.onclick=function(){}， 要给拖拽对象添加相应的oDiv.onclick=function(e){var oEvent=e||event; oEvent.cancelBubble = true;}
function Drag(id,p_id){
	var oDiv; var pDiv;
	//判断拖拽函数的参数是Id 还是 对象。
	switch (typeof id)
	{
		case "string": oDiv=document.getElementById(id); break;
		case "object": oDiv=id; break;
	}
	if (p_id) //判断是否有区域对象（非必要）
	{
		switch (typeof p_id)
		{
			case "string": pDiv=document.getElementById(p_id); break;
			case "object": pDiv=p_id; break;
		}
	}

	oDiv.onmousedown=function(e){
		oEvent=e||event;
		var insideX=oEvent.clientX-oDiv.offsetLeft;
		var insideY=oEvent.clientY-oDiv.offsetTop;

		if (oDiv.setCapture) //如果setCapture()函数有效
		{
			oDiv.onmousemove=fnMove;//则oDiv的mousemove事件执行fnMove()函数（拖拽运动）
			oDiv.onmouseup=fnUp; //则oDiv的mouseup事件执行fnUp()函数（鼠标放开）
			oDiv.setCapture();
		}else{ //如果setCapture()函数无效
			document.onmousemove=fnMove;//则document的mousemove事件执行fnMove()函数（拖拽运动）
			document.onmouseup=fnUp //则document的mouseup事件执行fnUp()函数（鼠标放开）
		}
		function fnMove(e){
			var MaxL=0; var MaxT=0;
			oEvent=e||event;
			if (pDiv)
			{
				MaxL=pDiv.offsetWidth-oDiv.offsetWidth;
				MaxT=pDiv.offsetHeight-oDiv.offsetHeight;
			}else{
				MaxL=document.documentElement.clientWidth-oDiv.offsetWidth;
				MaxT=document.documentElement.clientHeight-oDiv.offsetHeight;
			}
			var l=oEvent.clientX-insideX;
			var t=oEvent.clientY-insideY;
			if (l<0){l=0}else if (l>=MaxL-0){l=MaxL} // 修改(l<0+x) 和 (l>MaxL-x) x为磁性吸附的范围 可以实现磁性吸附效果
			if (t<0){t=0}else if (t>=MaxT){t=MaxT}
			oDiv.style.left=l+"px";
			oDiv.style.top=t+"px";
		}

		function fnUp(){
			this.onmousemove=null;
			this.onmouseup=null;
			if (this.releaseCapture)
			{ this.releaseCapture(); }
		}
		return false;
	}
}

//DragPro(id):完美拖拽函数： 参数id为被拖拽的元素的Id. 可以计算物体运动速度，然后选择调用投掷函数Shot()
//兼容各版本浏览器解决鼠标选中背景内容的问题。修改两侧最大最小值范围可实现磁性吸附（见下注释）
//参数：必要参数：拖动的对象或其ID，非必要参数 p_id：拖动对象的父级区域对象或其ID（用于限制拖动范围）
//使用备注： 该拖拽函数当区域对象中有事件函数时，需要在拖拽对象中添加相应的事件来阻止行为：
//如 区域对象的事件行为是：oH.onclick=function(){}， 要给拖拽对象添加相应的oDiv.onclick=function(e){var oEvent=e||event; oEvent.cancelBubble = true;}
function DragPro(id,p_id){
	var oDiv; var pDiv;
	//判断拖拽函数的参数是Id 还是 对象。
	switch (typeof id)
	{
		case "string":
		oDiv=document.getElementById(id);
		break;
		case "object":
		oDiv=id;
		break;
	}
	if (p_id) //判断是否有区域对象（非必要）
	{
		switch (typeof p_id)
		{
			case "string":
			pDiv=document.getElementById(p_id);
			break;
			case "object":
			pDiv=p_id;
			break;
		}
	}
	oDiv.timer=null; //给拖动对象添加一个timer 属性（用于存放定时器）
	oDiv.onmousedown=function(e){
		oEvent=e||event;
		var insideX=oEvent.clientX-oDiv.offsetLeft;
		var insideY=oEvent.clientY-oDiv.offsetTop;

		var lastX=0;	var lastY=0;  //该参数为存放运动对象拖拽时临放开前计算机可检测的最后运动距离
		var iSpeedX=0;  var iSpeedY=0; // 用于存放计算得出的鼠标放开时运动物体的速度

		clearInterval(oDiv.timer);

		if (oDiv.setCapture) //如果setCapture()函数有效
		{
			oDiv.onmousemove=fnMove;//则oDiv的mousemove事件执行fnMove()函数（拖拽运动）
			oDiv.onmouseup=fnUp; //则oDiv的mouseup事件执行fnUp()函数（鼠标放开）
			oDiv.setCapture();
		}else{ //如果setCapture()函数无效
			document.onmousemove=fnMove;//则document的mousemove事件执行fnMove()函数（拖拽运动）
			document.onmouseup=fnUp //则document的mouseup事件执行fnUp()函数（鼠标放开）
		}
		function fnMove(e){
			var MaxL=0; var MaxT=0;
			oEvent=e||event;
			if (pDiv)
			{
				MaxL=pDiv.offsetWidth-oDiv.offsetWidth;
				MaxT=pDiv.offsetHeight-oDiv.offsetHeight;
			}else{
				MaxL=document.documentElement.clientWidth-oDiv.offsetWidth;
				MaxT=document.documentElement.clientHeight-oDiv.offsetHeight;
			}
			var l=oEvent.clientX-insideX;
			var t=oEvent.clientY-insideY;
			if (l<0){l=0}else if (l>=MaxL-0){l=MaxL} // 修改(l<0+x) 和 (l>MaxL-x) x为磁性吸附的范围 可以实现磁性吸附效果
			if (t<0){t=0}else if (t>=MaxT){t=MaxT}
			oDiv.style.left=l+"px";
			oDiv.style.top=t+"px";

			//计算拖拽期间拖动对象的运动速度
			iSpeedX=l-lastX;
		    iSpeedY=t-lastY;
			lastX=l;
			lastY=t;
		}

		function fnUp(){
			this.onmousemove=null;
			this.onmouseup=null;
			if (this.releaseCapture)
			{
				this.releaseCapture();
			}
			//放开鼠标后，选择性开启的重力弹力摩擦力的运动函数
			//Shot(oDiv,iSpeedX,iSpeedY);
		}
		return false;
	}
}
//CrashTest(obj1,obj2): 碰撞检测函数，参数为两个碰撞检测对象obj1,obj2，返回值为：碰撞为true，没碰为false。
//可以用轮询方式检测一个对象对多个的碰撞检测。例：for (var i=0;i<objs.length ;i++ ){if (obj==oobjs[i])continue;if (CrashTest(obj,objs[i])==true){fn}	}
function CrashTest(obj1,obj2){
		var l1=obj1.offsetLeft;
		var r1=obj1.offsetLeft+obj1.offsetWidth;
		var t1=obj1.offsetTop;
		var b1=obj1.offsetTop+obj1.offsetHeight;

		var l2=obj2.offsetLeft;
		var r2=obj2.offsetLeft+obj2.offsetWidth;
		var t2=obj2.offsetTop;
		var b2=obj2.offsetTop+obj2.offsetHeight;

		if (r1<l2||l1>r2||b1<t2||t1>b2)
		{
			return false;
		}else{
			return true;
		}
	}

//getDis(obj1,obj2)：获取两个对象中心点之间的距离（获取一个数）参数为两个对象
function getDis(obj1,obj2){ //获取两个对象之间的距离函数
	var a=(obj1.offsetLeft+obj1.offsetWidth/2)-(obj2.offsetLeft+obj2.offsetWidth/2);
	var b=(obj1.offsetTop+obj1.offsetHeight/2)-(obj2.offsetTop+obj2.offsetHeight/2);
	return Math.sqrt(a*a+b*b);
}

//MousDir(obj,e)：获取鼠标离某对象中心点之间的距离，参数obj为检测对象，e为事件onmousemove中的event对象。
function MousDir(obj,e){
	var a=(obj.offsetLeft+obj.offsetWidth/2)-e.clientX;
	var b=(obj.offsetTop+obj.offsetHeight/2)-e.clientY;
	return Math.sqrt(a*a+b*b);
}

//SideAd(obj,O_Bottom)：侧边栏广告滑动函数；参数：obj-运动（广告）模块，oBottom-运动模块离浏览器可视区域底部的距离。
//该函数可以检测浏览器 scrollBar 的（上下）滚动方向。 PS：该函数需要调用缓冲运动模块。
//PS：加载或使用跟随浏览器滚动的按钮或动态侧边栏时最好用：“window.onresize=window.onload=function{对象/函数}”
function SideAd(obj,O_Bottom){
	var B_Height=document.documentElement.clientHeight;
	var O_Height=obj.offsetHeight;
	var sign=0;
	Move(obj,{top:B_Height-O_Height-O_Bottom});
	window.onscroll=function(){ //由于在加载该函数前必须有“window.onresize”，因此这里可以不用
		var scrTop=document.documentElement.scrollTop||document.body.scrollTop;
		//判断scrollBar的上下方向：
		if (scrTop>sign)
		{
			sign=scrTop;
			document.title=scrTop+"+Down";
		}else if (scrTop<sign)
		{
			sign=scrTop;
			document.title=scrTop+"+Up";
		}
		var h=B_Height-O_Height-O_Bottom+scrTop;
		Move(obj,{top:h});
	}
}

//KeyDownMove(id): 键盘控制div移动函数，参数为移动对象或对象id（无卡顿），无边界限制。
function KeyDownMove(id){
	switch (typeof id)
	{
		case "string": oDiv=document.getElementById(id); break;
		case "object": oDiv=id; break;
	}
	var timer=null;
	var up=down=right=left=false;

	setInterval(function(){
		if (up)
		{	oDiv.style.top=oDiv.offsetTop-10+"px";
		}else if (down)
		{	oDiv.style.top=oDiv.offsetTop+10+"px";
		}else if (right)
		{	oDiv.style.left=oDiv.offsetLeft-10+"px";
		}else if (left)
		{	oDiv.style.left=oDiv.offsetLeft+10+"px";
		}
	},50);

	document.onkeydown=function(e){
		var oEvent=e||event;
		switch (oEvent.keyCode)
		{
			case 38:	up=true;	break;
			case 40:	down=true;	break;
			case 37:	right=true; break;
			case 39:	left=true;	break;
		}
	}
	document.onkeyup=function(e){
		var oEvent=e||event;
		switch (oEvent.keyCode)
		{
			case 38: up=false; break;
			case 40: down=false; break;
			case 37: right=false; break;
			case 39: left=false; break;
		}
	}

}

//Shake(obj,attr,endFn)：震动函数，让对象水平或纵向震动。参数：obj（震动对象），attr（属性：left/top），endFn（回调函数）
function Shake(obj,attr,endFn){
	if (obj.flag==false){return};  //检测开关
	obj.flag=true; //打开开关
	var arr=[];
	var num=0;
//设置震动幅度及频率：i为20，每次 i-2 直到i=0，将正负i 存入arr
	for (var i=20;i>0 ;i-=2 ){ 	arr.push(i,-i); }
	arr.push(0); //同时将0存入arr

	clearInterval( obj.shake ); //指定动作：运动前关闭定时器（此处的定时器用“shake”储存）

	obj.shake = setInterval(function (){  //开动计时器，让对象的attr值循环加上arr数组内的元素
		obj.style[attr] = parseInt(getStyle(obj,attr)) + arr[num] + 'px';
		num++;
		if (num<arr.length) //判断在加arr[i]的过程中，未加到最后时函数开关都设为关
		{
			obj.flag=false;
		}else if ( num == arr.length ) {  //直至加完arr内所有元素
			clearInterval( obj.shake ); //关闭定时器
			obj.flag=true;		//重新打开开关
			if (endFn){endFn.call(obj);}  //判断是否有回调函数
		}
	}, 30);
}

//fnShake():连续两次（不同方向）震动函数：依附震动函数Shake()使用
function fnShake() {
		var _this = this; //注意“this”的使用
		Shake( _this,"left", function(){
			Shake( _this, "top" );
		});
	}

//StopMove(obj)： 停止对象的计时器函数（计时器的名必须为“timer”）， 参数为对象
function StopMove(obj)
	{
		clearInterval(obj.timer);
	}


/*鼠标滑轮事件 + 模拟滑动条：非函数 供参考用

//获取对象：
	var oBtn=document.getElementBy("Btn"); //获取滑动块对象
	var oBar=document.getElementBy("Btn"); //获取滑动槽对象
	var oCon=document.getElementBy("Content");//获取滑动条所操纵的对象
	var oHol=document.getElementBy("Holder");//获取限制可视区域的对象

//计算比率：操纵对象的长度与滑动条长度的比例， 以及操纵对象与可视区域对象之间溢出的距离。
	oBar.style.height=oHol.offsetHeight+"px";
	var OverT=oCon.offsetHeight-oHol.offsetHeight;
	var iScale=oCon.offsetHeight/oBar.offsetHeight;

// 根据比值和溢出距离，计算滑动块与滑动槽之间的空间（滑动块的运动空间与操纵对象的溢出距离成比例，
	比例值为：操纵对象总长度与滑动条总长度的比）。
	if (OverT<=0)
	{
		oBar.style.display="none";
		oBtn.style.height=oBar.offsetHeight+"px";
	}else{
		oBtn.style.height=oBar.offsetHeight-OverT/iScale+"px";
		oBar.style.display="block";
	}
//创建鼠标滚轮的滑动事件函数，
function onMouseWheel(e){
		var oEvent=e||event;	//事件变量
		var bDown=true;			//方向检测变量
		var T=oBtn.offsetTop;   //滑动运动距离变量（纵向获取 obj.offsetTop，横向获取obj.offsetLeft）
		var MaxT=oBar.offsetHeight-oBtn.offsetHeight；//最大滑动距离变量，横向为两个obj的offsetWidth的差值，纵向为offsetHeight的差值

		bDown=oEvent.wheelDelta?oEvent.wheelDelta<0:oEvent.detail>0; //判断上下方向的方法（固定）

		if (bDown)
		{
			T+=10;
			if (T>MaxT-3){T=MaxT;}
		}else{
			T-=10;
			if (T<3){T=0;}
		}
		oBtn.style.top=T+"px";
		oCon.style.top=-1*T*iScale+"px"; //oCon为所滚动条所操纵的对象。 iScale为滑动条总长度与操纵对象总长度的比值。

		if (oEvent.preventDefault)
		{
			oEvent.preventDefault();
		}
		return false;
	}
//绑定事件函数：用 “myAddEvent(obj,sEvent,fn)”函数进行绑定。
	myAddEvent(obj,"mousewheel",onMouseWheel); //obj为接收鼠标滑轮对象
	myAddEvent(obj,"DOMMouseScroll",onMouseWheel);

*/


//时间控制板运动框架---------------------------------------------------------------------------------
//startMove(obj,json,times,fx,fn): 时间控制型运动框架函数（对应Move()为“速度控制型”运动框架），根据时间的长短来完成指定的运动过程。
//startMove()的参数：obj和json为必要参数，times(运动时间,默认400),fx(运动模式,默认为"linear"匀速),fn(回调函数)为非必要参数。
//fx参数解释：参数值以“字符串”形式输入 参数值为“Tween算法”json中的函数名， 调用不同的算法函数达到不同的运动效果
function startMove(obj,json,times,fx,fn){
	//判断参数(times、fx和fn)的取值，这三个参数为非必要参数，函数内设定默认值
	if (typeof times=='undefined') {
		times=400;				//无参数“times、fx和fn”的情况下，默认时间400微秒，匀速
		fx='linear';
	}
	if (typeof times=='string'){		//如果函数内无times参数值，但有fx参数值 时
		if (typeof fx=="function"){		//在此情况下，加入还有 fn 参数，让原来在“fx”位置上的那个参数值变为‘fn’的参数值
			fn=fx;
		}
		fx=times;				//原来times参数位置上的参数值变为fx的参数值
		times=400;				//times的参数值默认400
	}

	else if (typeof times=='function'){  //既无times参数值，也无fx参数值，只有fn参数值时：
		fn=times;				//将原来times参数位置上的参数值指向参数“fn”
		times=400;				//times默认400，fx默认 linear（匀速）
		fx='linear';
	}
	else if (typeof times=='number'){ //若只有时间，但没有fx的参数值
		if (typeof fx=="function")
		{
			fn=fx;					//fx参数的位置是个函数时，将这个位置的值指向fn参数
			fx='linear';			//默认fx为‘linear’
		}else if (typeof fx=='undefined')
		{
			fx='linear'; //若fx参数位置的值不存在，fx的值默认为'linear'
		}
	}

	var iCur={}; //创建一个空json变量，用于存放参数json中的各个属性的当前值
	for (var attr in json )// 轮询参数json获取运动对象中的运动属性的当前值
	{
		iCur[attr]=0;
		if (attr=="opacity")
		{
			iCur[attr]=parseInt(parseFloat(getStyle(obj, attr))*100);
		}else{
			iCur[attr]=parseInt(getStyle(obj, attr));
		}
	}

	var startTime=now(); //获取开始运动前的当前时间点

	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var changeTime=now(); //运动过程中计算当前的时间点
		var t=times-Math.max(0,startTime-changeTime+times); //计算当前时间在总运动时长中的的时间点

		for (var attr in json )
		{
			var value=Tween[fx](t,iCur[attr],json[attr]-iCur[attr],times);

			if (attr=='opacity')
			{
				obj.style.opacity=value/100;
				obj.style.filter='alpha(opacity='+value+')';
			}else{
				obj.style[attr]=value+'px';
			}
		}

		if (t==times)
		{
			clearInterval(obj.timer);
			if (fn){
				fn.call(obj);
			}
		}
	},13)//13微秒循环一次定时器（预设值）

	/*function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}
		else{
			return getComputedStyle(obj,false)[attr];
		}
	}*/
	//获取当前时间点的函数：从1970年到当前系统时间的总微秒数。
	function now(){
		return (new Date()).getTime();
	}

}

/* Tween算法的运动效果参数列表：
普通运动类：
1. "linear": 匀速运动； 2. "easeIn": 加速运动； 3. "easeOut"： 减速运动

明显加减速运动：
1. "easeInStrong"：双倍加速运动，更明显前慢后快
2. "easeOutStrong"：双倍加速运动，更明显前快后慢
3. "easeBothStrong"：明显的两头慢中间快

低速弹性运动
1. "elasticIn" ：运动开始前慢速震动后在运动（弹动渐入）
2. "elasticOut" ：弹性效果结束运动（结束时缓慢来回震动）
3. "elasticBoth"：运动开头与结束有缓慢弹性效果

高速弹性（震动）运动
1. "bounceIn"：以快速震动来开始运动（高速弹性开始）
2. "bounceOut"：以快速震动来结束运动（高速弹性结束）
3. "bounceBoth"：开始于结束运动时都有快速的震动

缩进及拉回式运动
1. "backIn")：运动开始前先向反方向缩进一段小距离（类似弹弓式的弹出）
2. "backOut")：到达目标后超过少部分后拉回（结束运动仅被拉回，无弹性效果）
3. "backBoth")：运动开始前先反方向缩进，到达目标后越过目标值然后被拉回
*/

//Tween算法的json集合：存放各类Tween运动的算法函数。不同json值对应不同的的运动模式的算法，供运动框架函数调用
var Tween = {
	linear: function (t, b, c, d){  //匀速
		return c*t/d + b;
	},
	easeIn: function(t, b, c, d){  //加速曲线
		return c*(t/=d)*t + b;
	},
	easeOut: function(t, b, c, d){  //减速曲线
		return -c *(t/=d)*(t-2) + b;
	},
	easeBoth: function(t, b, c, d){  //加速减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
		}
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInStrong: function(t, b, c, d){  //加加速曲线
		return c*(t/=d)*t*t*t + b;
	},
	easeOutStrong: function(t, b, c, d){  //减减速曲线
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
		}
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p/4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	elasticBoth: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d/2) == 2 ) {
			return b+c;
		}
		if (!p) {
			p = d*(0.3*1.5);
		}
		if ( !a || a < Math.abs(c) ) {
			a = c;
			var s = p/4;
		}
		else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		if (t < 1) {
			return - 0.5*(a*Math.pow(2,10*(t-=1)) *
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		}
		return a*Math.pow(2,-10*(t-=1)) *
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	},
	backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
		if (typeof s == 'undefined') {
		   s = 1.70158;
		}
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	backOut: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 3.70158;  //回缩的距离
		}
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	backBoth: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 1.70158;
		}
		if ((t /= d/2 ) < 1) {
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		}
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
		return c - Tween['bounceOut'](d-t, 0, c, d) + b;
	},
	bounceOut: function(t, b, c, d){
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	},
	bounceBoth: function(t, b, c, d){
		if (t < d/2) {
			return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
		}
		return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	}
}



//妙味运动框架-----------------------------------------------------------------
//css(obj, attr, value)：相当于“getStyle()方法”
function css(obj, attr, value)
{
	if(arguments.length==2)
		return parseFloat(obj.currentStyle?obj.currentStyle[attr]:document.defaultView.getComputedStyle(obj, false)[attr]);
	else if(arguments.length==3)
		switch(attr)
		{
			case 'width':
			case 'height':
			case 'paddingLeft':
			case 'paddingTop':
			case 'paddingRight':
			case 'paddingBottom':
				value=Math.max(value,0);
			case 'left':
			case 'top':
			case 'marginLeft':
			case 'marginTop':
			case 'marginRight':
			case 'marginBottom':
				obj.style[attr]=value+'px';
				break;
			case 'opacity':
				obj.style.filter="alpha(opacity:"+value*100+")";
				obj.style.opacity=value;
				break;
			default:
				obj.style[attr]=value;
		}

	return function (attr_in, value_in){css(obj, attr_in, value_in)};
}

var MIAOV_MOVE_TYPE={
	BUFFER: 1,
	FLEX: 2
};

//妙味运动函数：参数oTarget：json{attr:value}； iType:运动形式(MIAOV_MOVE_TYPE.BUFFER缓冲/ MIAOV_MOVE_TYPE.FLEX弹性)
function miaovStartMove(obj, oTarget, iType, fnCallBack, fnDuring)
{
	var fnMove=null;
	if(obj.timer)
	{
		clearInterval(obj.timer);
	}

	switch(iType)
	{
		case MIAOV_MOVE_TYPE.BUFFER:
			fnMove=miaovDoMoveBuffer;
			break;
		case MIAOV_MOVE_TYPE.FLEX:
			fnMove=miaovDoMoveFlex;
			break;
	}

	obj.timer=setInterval(function (){
		fnMove(obj, oTarget, fnCallBack, fnDuring);
	}, 15);
}


function miaovDoMoveBuffer(obj, oTarget, fnCallBack, fnDuring)
{
	var bStop=true;
	var attr='';
	var speed=0;
	var cur=0;

	for(attr in oTarget)
	{
		cur=css(obj, attr);
		if(oTarget[attr]!=cur)
		{
			bStop=false;

			speed=(oTarget[attr]-cur)/5;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);

			css(obj, attr, cur+speed);
		}
	}

	if(fnDuring)fnDuring.call(obj);

	if(bStop)
	{
		clearInterval(obj.timer);
		obj.timer=null;

		if(fnCallBack)fnCallBack.call(obj);
	}
}

function miaovDoMoveFlex(obj, oTarget, fnCallBack, fnDuring)
{
	var bStop=true;
	var attr='';
	var speed=0;
	var cur=0;

	for(attr in oTarget)
	{
		if(!obj.oSpeed)obj.oSpeed={};
		if(!obj.oSpeed[attr])obj.oSpeed[attr]=0;
		cur=css(obj, attr);
		if(Math.abs(oTarget[attr]-cur)>1 || Math.abs(obj.oSpeed[attr])>1)
		{
			bStop=false;

			obj.oSpeed[attr]+=(oTarget[attr]-cur)/5;
			obj.oSpeed[attr]*=0.7;
			var maxSpeed=65;
			if(Math.abs(obj.oSpeed[attr])>maxSpeed)
			{
				obj.oSpeed[attr]=obj.oSpeed[attr]>0?maxSpeed:-maxSpeed;
			}

			css(obj, attr, cur+obj.oSpeed[attr]);
		}
	}

	if(fnDuring)fnDuring.call(obj);

	if(bStop)
	{
		clearInterval(obj.timer);
		obj.timer=null;
		if(fnCallBack)fnCallBack.call(obj);
	}
}



//日期数字自定义函数：-------------------------------------------------------------------------
//toDouble(date)：让日期（或数字）输出为字符串，且小于10的个位数以0x输出。
function toDouble(date){
		if (date<10)
		{
			return "0"+date;
		}else{
			return ""+date;
		}
}
//Chnday(day)：获得中文星期几（参数为dateobj.getDay()）
function Chnday(day){
	switch (day)
	{
	case 0:
		return "星期日";
	case 1:
		return "星期一";
	case 2:
		return "星期二";
	case 3:
		return "星期三";
	case 4:
		return "星期四";
	case 5:
		return "星期五";
	case 6:
		return "星期六";
	}
}

//isLeapYear() 判断是否闰年的方法，返回 true(是闰年)/false， 参数为一个年份
function isLeapYear(year){
		if (year%4==0 && year%100!=0)
		{
			return true;
		}else{
			if (year%400==0)
			{
				return true;
			}else{
				return false;
			}
		}
	}

//toTime(oHour,oMin,oSec)：函数计算时针/分针/秒针角度的函数，参数（oHour,oMin,oSec）分别为代表时分秒针的对象标签，本函数要点为时间时分秒数值转化为角度的算法
//使用方法：timer=setInterval(function(){toTime(oHour,oMin,oSec)},1000);//放在定时器内使用
function toTime(oHour,oMin,oSec){
	var oDate=new Date();
	oSec.style.WebkitTransform="rotate("+(oDate.getSeconds()*6)+"deg)";
	oMin.style.WebkitTransform="rotate("+(oDate.getMinutes()*6)+"deg)";
	oHour.style.WebkitTransform="rotate("+(oDate.getHours()%12*30+oDate.getMinutes()*6/12)+"deg)";
}//注意：使用该函数是注意（oHour,oMin,oSec）对象的CSS3样式“transform-origin”（转变基点）的设置位置（是否底部）


//数字自定义函数：-------------------------------------------------------------------------
//Find_Max(arr): 返回数组arr的最大值，以及最大值的index。最大值为：Find_Max(arr).value；最大值index为：Find_Max(arr).index 。
//参数arr为要查找的数组
function Find_Max(arr){
		var a={value:0,index:0}
		a.value=arr[0]; a.index=0;
		for (var i=1;i<=arr.length ;i++ )
		{
			if (a.value-arr[i]<0)
			{
				a.value=arr[i];
				a.index=i;
			}
		}
		return a;
}

//Find_Min(arr): 返回数组arr的最小值，以及最小值的index。最小值为：Find_Min(arr).value；最小值index为：Find_Min(arr).index 。
//参数arr为要查找的数组
function Find_Min(arr){
		var a={value:0,index:0}
		a.value=arr[0]; a.index=0;
		for (var i=1;i<=arr.length ;i++ )
		{
			if (a.value-arr[i]>0)
			{
				a.value=arr[i];
				a.index=i;
			}
		}
		return a;
}

//arrIndexOf(arr,v)函数： 查找v在数组内的index值。 参数：arr是查找的数组， v是目标值
function arrIndexOf(arr,v){
	for (var i=0;i<arr.length ;i++ )
	{
		if (arr[i]==v)
		{
			return i;
		}
	}
	return -1
}

//RandomArr(n,m,b)随机数组返回函数：随机返回一个元素范围在数字n-m之间的数组，数组长度随机，（如果有参数b，则长度为b）
function RandomArr(n,m,b){
	var arr=[];
	for (var i=n;i<=m ;i++ ){arr.push(i);}
	arr.sort(function(a,b){return Math.random()-0.5});
	if (!b){b=Math.round(n+Math.random()*(m-n));}
	arr.length=b;
	return arr;
}

//CreateArr(iAll,iNow)随机数组返回函数：随机返回一个元素范围在数字0-iAll之间的数组，数组长度iNow
function CreateArr(iAll,iNow){
	var arr=[];
	var newArr=[];
	for (var i=0;i<iAll;i++ )
	{
		arr.push(i);
	}
	for (var i=0;i<iNow ;i++ )
	{
		newArr.push(arr.splice(Math.floor(Math.random()*arr.length),1))
	}
	return newArr;
}

//quickSort(arr,flag) 快速排序函数， 参数： arr为要排序的数组（仅限数字），flag为可选参数，flag=true时由小往大排，flag没有或者“false”时，由大往小排
//用法：alert(quickSort([52,98,15,78,-6,4,13,-7,9,32,6,16,22,3],true));
function quickSort(arr,flag){
	if (arr.length<=1) {return arr; } //如果数组没有内容或者只有一个内容,直接返回数组
	var num=Math.floor(arr.length/2); //获取基点数的index
	var numVal=arr.splice(num,1); //用splice() 在arr 中截取 index为num的元素（并返回该数）。
	var left=[];
	var right=[];

	if (flag==true) //判断参数flag， 若为true
	{
		for (var i=0;i<arr.length ;i++ )
		{
			if (arr[i]<numVal) //从小到大排
			{
				left.push(arr[i]);
			}else{
				right.push(arr[i])
			}
		}
		return quickSort(left,flag).concat([numVal],quickSort(right,flag));
	}else{
		for (var i=0;i<arr.length ;i++ )
		{
			if (arr[i]<numVal) //从大到小排
			{
				right.push(arr[i]);
			}else{
				left.push(arr[i])
			}
		}
		return quickSort(left).concat([numVal],quickSort(right));
	}
}

//Cookie操作自定义函数：-------------------------------------------------------------------------
//setCookie(name, value, iDay)：设置cookie的函数；三个参数：cookie名；cookie值，过期日期
function setCookie(name, value, iDay) //设置cookie的函数。
{	//三个参数：cookie名；cookie值，过期日期
	var oDate=new Date();
	oDate.setDate(oDate.getDate()+iDay);
	document.cookie=name+'='+value+';expires='+oDate;
}

//getCookie(name)：获取cookie （获取name的值）；该函数的参数为 name（cookie的name）
function getCookie(name)//该函数的参数为 name（cookie的name）
{
//'username=abc; password=123456; aaa=123; bbb=4r4er' 假设这是一个cookie字符串
	var arr=document.cookie.split('; ');//将该字符串以“; ”为间隔隔开形成数组
	var i=0;

	//arr->['username=abc', 'password=123456', ...]

	for(i=0;i<arr.length;i++) //遍历刚才生成的数组
	{
		//arr2->['username', 'abc']
		var arr2=arr[i].split('='); //在每个数组元素中，以"="隔开形成一个新的数组

		if(arr2[0]==name) //新分割的数组中，若第一个元素为name
		{
			return arr2[1]; //返回第二个元素的值，这个值就是name的值。
		}
	}
	return ''; //若遍历第一个数组后，发现每个arr2[0]都不等于参数name，则说明没有这个cookie，返回空。
}

//removeCookie(name)：删除cookie；//参数为待删除的cookie name
function removeCookie(name)  //参数为待删除的cookie name
{
	setCookie(name, '1', -1); //将这个待删除的name的过期值expires设为-1
}


//HTML标签显示自定义函数--------------------------------------------------------------------------------
//displayAbbreviations()：显示HTML文件中<abbr>标签内容的函数。无参数。可以在事件里进行调用，或者使用函数addLoadEvent(displayAbbreviations)进行调用。获取到的内容会显示在页面的最末尾。
function displayAbbreviations(){
	if (!document.createElement || !document.getElementsByTagName || !document.createTextNode)
	{return false;}

	var arr=new Array();//创建空白数组arr为容器
	var abbr=document.getElementsByTagName("abbr");//获取所有abbr标签称为一个数组
	for (var i=0;i<abbr.length ;i++ )//遍历abbr数组
	{
		var title=abbr[i].getAttribute("title");//获取abbr标签的title属性值
		var key=abbr[i].lastChild.nodeValue;//获取abbr标签内的text
		arr[key]=title; //放入空白数组容器 数组的元素名为abbr的text（变量 key），元素为title属性值（变量 title）
	}

	var dlist=document.createElement("dl");//添加dl标签

	for(key in arr){ //遍历新的 arr数组 用变量key去遍历 （key为arr数组的每个元素名）
		var definition=arr[key]; //将arr数组的（每个）元素“arr[key]” 定义为变量 “definition”
		//创建dt标签 （dt为dl的属下标签），dt标签内的值为arr数组的（各个）元素名
		var dtitle=document.createElement("dt");
		var dtitle_text=document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		//创建dd标签 （dd为dl的属下标签），dd标签内的值为arr数组的（各个）元素（所代表的对象）
		var ddesc=document.createElement("dd");
		var ddesc_text=document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		//将dtitle 和ddesc 添加到dl标签中
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	//判断：如果经过上面的遍历后，dlist中并没有子节点（就是数组arr为空<没有元素>，生成不了任何dtitle和ddesc）
	if (dlist.childNodes.length<1)return false; //直接跳出函数，无需向下运行。
	//若节点存在：创建标题“header”
	var header=document.createElement("h2");
	var header_text=document.createTextNode("Abbreviation");
	header.appendChild(header_text);
	//将生成的header 和 dlist 添加到body下面。
	document.body.appendChild(header);
	document.body.appendChild(dlist);
	//也可以用insertBefore（或insertAfter）函数添加到指定的位置
}

//displayCita(): 显示HTML文档中blockquote标签中的cite连接（引用文档连接）的函数，无参数。可以在事件里进行调用，或者使用函数addLoadEvent(displayCita)进行调用。获取到的内容会以上标的形式出现在标签内容末尾。
//注意：使用该函数时请确保<blockquote>标签内没有其他的标签。
function displayCita(){
	var quote=document.getElementsByTagName("blockquote");
	for (var i=0;i<quote.length ;i++ )
	{
		if (!quote[i].getAttribute("cite"))continue;
		var url=quote[i].getAttribute("cite");

		var quoteChild=quote[i].getElementsByTagName("*");
		if (quoteChild.length<1)continue;
		var content=quoteChild[quoteChild.length-1];

		var link=document.createElement("a");
		var link_text=document.createTextNode("source");
		link.setAttribute("href",url);
		link.appendChild(link_text);

		var subtitle=document.createElement("sup");
		subtitle.appendChild(link);
		content.appendChild(subtitle);
	}
}

//displayShortCut():显示HTML文件中<a>标签里面accesskey属性值（快捷方式）的函数。无参数。可以在事件里进行调用，或者使用函数addLoadEvent(displayShortCut)进行调用。获取到的内容会显示在页面的最末尾。
function displayShortCut(){

	var alinks=document.getElementsByTagName("a");
	var arr=new Array();
	for (var i=0;i<alinks.length ;i++ )
	{
		if (!alinks[i].getAttribute("accesskey"))continue;
		var link_key=alinks[i].getAttribute("accesskey");
		var link_page=alinks[i].lastChild.nodeValue;
		arr[link_key]=link_page;
	}

	var list=document.createElement("ul");
	for (key in arr)
	{
		var page=arr[key];
		var cont_text=key+":"+page;
		var ali=document.createElement("li");
		var li_text=document.createTextNode(cont_text);
		ali.appendChild(li_text);

		list.appendChild(ali);
	}
	var header=document.createElement("h3");
	var header_text=document.createTextNode("shortcut");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(list);

}

//DOM 特定对象函数----------------------------------------------------------------------------------------------------------
// Alter_Switch_Color(obj,color1,color2): 表格各行变色且鼠标覆盖变色函数，使表格不但可以各行变色，且当鼠标移入某行时，该行变色
// 参数obj：表格对象（必须是表格）， color1：用于各行区分的颜色， color2：鼠标覆盖表格行时的颜色
function Alter_Switch_Color(obj,color1,color2){
	var oldColor;
	var oTbody=obj.tBodies[0];
	for (var i=0;i<oTbody.rows.length ;i++ )
	{
		oTbody.rows[i].style.backgroundColor=i%2==0?color1:"";

		oTbody.rows[i].onmouseover=function(){
			oldColor=this.style.backgroundColor;
			this.style.backgroundColor=color2;
		}
		oTbody.rows[i].onmouseout=function(){
			this.style.backgroundColor=oldColor;
		}
	}
}

//insertAfter(new_obj, inser_obj)将新创建的“obj”元素放到指定的"target_obj"元素之后。
function insertAfter(obj,target_obj){
	var parent=target_obj.parentNode;
	if (parent.lastChild==target_obj)
	{
		parent.appendChild(obj);
	}else{
		parent.insertBefore(obj,target_obj.nextSibling);
	}
}

//正则表达式方法------------------------------------------------------------------------------------------------------------
//trim(str):取出字符串首尾空格的方法,参数是 待处理的字符串
function trim(str){
     var re=/^\s+|\s+$/g;
     return str.replace(re,"");
}

//FaceCode(str)表情代码解码函数： 用于对字符串中的表情符号代码进行解码。用于可发表情的输入框程序。参数 str：待解吗字符串
//表情代码必须以：“[图片名]” 形式， 返回一个图片的html标签。
function FaceCode(str){
		var re=/\[([0-9]{2})\]/gi;
		var result;
		str=str.replace(re,function(str1){
			var re2=/[\[\]]/g;
			result="<img  src='img/"+parseInt(str1.replace(re2,""))+".png'/>";
			return result;
		})
		return str;
	}

//字符串方法-------------------------------------------------------------------------------------
//getIndex(str,search,i): 返回字符串str 内 某个字符“search” 的位置。可以控制从字符串的第i个字符开始搜索。返回结果为“search”出现位置组成的数组、
//参数： str：要搜索的字符串， search：目标字符 ， i数组的第i位
function getIndex(str,search,i){
	var arr=[];
	while (str.indexOf(search,i)!=-1)

	{
		arr.push(str.indexOf(search,i));
		i=str.indexOf(search,i)+search.length;
	}
	return arr;
}

//detectNum(str)： 检测字符串是不是全部由数字组成，参数 str为待检测的字符串。 返回true/false
function detectNum(str){
		var n=0;
		for (var i=0;i<str.length ;i++ )
		{
			n=str.charCodeAt(i);
			if (n<48||n>57){return false}
		}
		return true;
	}

//firstLetterUpper(str)： 首字母大写函数，参数为字符串对象“str”
function firstLetterUpper(str){
	var res="";
	if (typeof str=="string")
	{
		res=str.charAt(0).toUpperCase()+str.substring(1);
	}else{	//substring(1)一个参数，表示返回截取该参数前的所有字符内容后的字符串
		res=str;
	}
	return res;
}

//trim(str)：自动检测字符串首尾空格，并删除首尾空格
function trim(str){
	var re1=/^\s+/g;  //以多个空格开头
	var re2=/\s+$/g;  //以多个空格结尾
	return str.replace(re1,"").replace(re2,"");
}

//toCamelStyle(str)：字符串转为驼峰写法的函数。
function toCamelStyle(str){
		var str2=null;
		var arr=str.split("");
		var re1=/[_]+/g;
		var re2=/^_+/g;
		for (var i=0;i<arr.length ;i++ )
		{
			arr[i].index=i;
			if (arr[i]=="_" && i!=0)
			{
				arr[i+1]=arr[i+1].toUpperCase();
			}
		}
		str2=arr.join("");
		str2=str2.replace(re1,"");
		if (str.charAt(0)!="_")
		{
			str2= str2;
		}else if (str.charAt(0)=="_")
		{
			str2="_"+str2;

		}
		return str2;

	}

//removeNum(str)：清除字符串中间数字函数
function removeNum(str){
	var re=/\d+/g;
	var str1=str.replace(re,"");
	return str1;
}

//reverse(str)： 字符串反向输出函数
function reverse(str){
		var arr1=str.split("");
		var arr2=[];
		for (var i=arr1.length-1;i>=0 ;i-- )
		{
			arr2.push(arr1[i]);
		}
		var str2=arr2.join("");
		return str2;
	}

//caculateExistNum(str)：计算字符串中每个字符出现次数的函数，输出一个json
function caculateExistNum(str){
	var res={};
	var arr=str.split("");
	arr.forEach(function(e){
		if (res[e]==true)
		{
			res[e]=res[e]+1;
		}else{
			res[e]=1;
		}
	})
	return res;
}

//图片预加载方法-------------------------------------------------------------------------------------
//showImage(obj_collect)：图片按需加载函数，让出现在浏览器显示区域的图片加载。提高页面加载速度，参数（obj_collect: 需要加载的图片集合）
//用法：window.onload=function(){showImage(obj_collect)}   window.onscroll=function(){showImage(obj_collect)}
//用于多图片陈列页面：如百度图库
	function showImage(obj_collect) {
		var scrollTop  = document.documentElement.scrollTop || document.body.scrollTop;
		for (var i=0; i<obj_collect.length; i++) {
			if ( !aImg[i].isLoad && getTop(aImg[i]) < scrollTop + document.documentElement.clientHeight ) {
				obj_collect[i].src = obj_collect[i].getAttribute('_src');
				obj_collect[i].isLoad = true;
			}
		}
	}



//Canvas ImageData方法-------------------------------------------------------------------------------------
//getXY(obj,x,y):获取图像内单个坐标点的(rgba)
function getXY(obj,x,y){
		var w=obj.width;
		var h=obj.height;
		var d=obj.data;

		var color=[];

		color[0]=d[4*(y*w+x)];
		color[1]=d[4*(y*w+x)+1];
		color[2]=d[4*(y*w+x)+2];
		color[3]=d[4*(y*w+x)+3];

		return color;

	}

//setXY(obj,x,y,color):设置图像内单个坐标点的(rgba)， 参数“color”以(r,g,b,a)形式出现。
function setXY(obj,x,y,color){
	var w=obj.width;
	var h=obj.height;
	var d=obj.data;

	d[4*(y*w+x)]=color[0];
	d[4*(y*w+x)+1]=color[1];
	d[4*(y*w+x)+2]=color[2];
	d[4*(y*w+x)+3]=color[3];
}


//Mosak(obj,id,n)：将canvas内图像转换为马赛克效果：参数：obj(预加载的图片对象)，id(canvas标签的“id”)，n(马赛克每个小格的大小，越大越模糊)
function Mosak(obj,id,n){
	var oC=document.getElementById(id);
	var oGC=oC.getContext("2d");

	oC.width=obj.width;
	oC.height=obj.height;
	oGC.drawImage(obj,0,0);

	var oImg=oGC.getImageData(0,0,oC.width,oC.height);
	var num=n;
	var cellW=parseInt(oC.width/num);
	var cellH=parseInt(oC.height/num);
	oGC.clearRect(0,0,oC.width,oC.height);
	var newImg=oGC.createImageData(oC.width,oC.height);

	for (var i=0;i<cellH ;i++ )
	{
		for (var j=0;j<cellW ;j++ )
		{
			var result=getXY(oImg,j*num+Math.floor(Math.random()*num),i*num+Math.floor(Math.random()*num));
			for (var k=0;k<num ;k++ )
			{
				for (var l=0;l<num ;l++ )
				{
					setXY(newImg,j*num+l,i*num+k,result);
				}
			}
		}
	}
	oGC.putImageData(newImg,0,0);
}

//toMosak(id,n): 马赛克处理函数简化版，使用场景：当canvas内已经存在图像时使用。参数：id为canvas标签的id，n(马赛克每个小格的大小，越大越模糊)
function toMosak(id,n){
	var oC=document.getElementById(id);
	var oGC=oC.getContext("2d");
	var oImg=oGC.getImageData(0,0,oC.width,oC.height);
	var num=n;
	var cellW=parseInt(oC.width/num);
	var cellH=parseInt(oC.height/num);
	var newImg=oGC.createImageData(oC.width,oC.height);

	for (var i=0;i<cellH ;i++ )
	{
		for (var j=0;j<cellW ;j++ )
		{
			var result=getXY(oImg,j*num+Math.floor(Math.random()*num),i*num+Math.floor(Math.random()*num));
			for (var k=0;k<num ;k++ )
			{
				for (var l=0;l<num ;l++ ){setXY(newImg,j*num+l,i*num+k,result);}
			}
		}
	}
	oGC.putImageData(newImg,0,0);
	return oImg; //返回图像处理前的像素对象
}
/*
该函数用于图片预加载后执行("oImg.onload")
使用参考方法如下：
fd.readAsDataURL(fs[0]);
fd.onload=function(){
	var yImg=new Image();
	yImg.onload=function(){Mosak(this,"c1");}
	yImg.src=this.result;
}
*/

//文字选择方法-----------------------------------------------------------------------------------------
//selectText()：解决兼容性的文字选择函数： 返回内容为选中的文字
function selectText(){
	if (document.selection)  //IE 浏览器内的内容选中对象
	{
		return document.selection.createRange().text;
	}else{
		return window.getSelection().toString();
	}
}

//getStrLen(str): 检验字符串中所有双字节的字符（如中文），并返回字符串的实际字节长度（将双字节字符长度（length）*2）。参数“str”：需要检测的字符串
function getStrLen(str){
	var re=/[^\x00-\xff]/g; //匹配所有双字节的字符（包括中文）
	return String(str).replace(re,'aa').length; //replace()将匹配“re”正则的字符转为‘aa’后返回str的length
		//将参数“str”转化为字符串对象“String(str)”
}


//CSS3样式封装函数-------------------------------------------------------------------------------------------
//getXY(iR,iDeg)：获取直角三角形中直角边长度的函数。 参数：iR（斜边长度），iDeg（指定角的角度），返回json:{x:n,y:m}
//（该函数可以用于计算对象的位置）
function getXY(iR,iDeg){
	if (iDeg==0)
	{
		return{x:0,y:iR}
	}else if (iDeg==90)
	{
		return {x:iR,y:0}
	}
	return {
		x:Math.round(Math.sin(iDeg/180*Math.PI)*iR), //对边长度
		y:Math.round(Math.cos(iDeg/180*Math.PI)*iR)  //邻边长度
		}
}

//addEnd(obj,fn)：捕获CSS3中“transition”（过渡）属性停止后触发的“transitionend”事件兼容函数，参数：obj是过渡属性作用的对象，fn为过渡结束后的回调函数。
function addEnd(obj,fn)
{
	obj.addEventListener('WebkitTransitionEnd',fn,false);
	obj.addEventListener('transitionend',fn,false);
} //addEnd(obj,fn)函数中如果回调函数再次改变obj的样式，obj的transition属性会再次生效，并且促发“transitionend”事件，调用fn函数，形成一个死循环。需要在回调函数中使用“removeEnd(obj,fn)”打破循环


//removeEnd(obj,fn)：使用在“addEnd(obj,fn)”的回调函数“fn”里面，用于解除连续触发“transitionend”事件的死循环。
function removeEnd(obj,fn)
{
	obj.removeEventListener('WebkitTransitionEnd',fn,false);
	obj.removeEventListener('transitionend',fn,false);
} //通常情况下“removeEnd(obj,fn)”的回调函数fn为“addEnd(obj,fn)”中的回调函数。
/*使用方法：
oBox.onclick=function(){ this.style.width=this.offsetWidth+100+"px";  addEnd(oBox,end); };
function end(){this.style.width=this.offsetWidth+100+"px"; removeEnd(this,end);} */

//toRotate(obj,iDeg)：对CSS3中的“transform”属性中的Matrix（矩阵）进行修改形成旋转效果的封装函数。参数：obj（transform属性的对象），iDeg旋转角度（顺时针为正）
function toRotate(obj,iDeg)
{
	var a=Math.round(Math.cos(iDeg/180*Math.PI)*100)/100;
	var b=Math.round(Math.sin(iDeg/180*Math.PI)*100)/100;
	var c=-b;
	var d=a;
	obj.style.WebkitTransform="matrix("+a+","+b+","+c+","+d+",0,0)";
	obj.style.MozTransform="matrix("+a+","+b+","+c+","+d+",0,0)";
	obj.style.transform="matrix("+a+","+b+","+c+","+d+",0,0)";
	obj.style.filter="progid:DXImageTransform.Microsoft.Matrix( M11="+a+", M12= "+c+", M21= "+b+" , M22="+d+",SizingMethod='auto expand')";
	obj.style.left=(obj.parentNode.offsetWidth-obj.offsetWidth)/2+"px";
	obj.style.top=(obj.parentNode.offsetHeight-obj.offsetHeight)/2+"px";
}

//flicker(obj,x,color): 闪烁方法：让对象obj的“background”变色闪动的函数。参数：obj为闪动对象，x为闪动次数，color为闪动颜色（字符串）
function flicker(obj,x,color){
	var iNum=0;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
			iNum++;
			if (iNum==(x+1)*2)
			{
				iNum=0;
				clearInterval(obj.timer);
			}
			if (iNum%2==0&&iNum!=0)
			{
				obj.style.background=color;
			}else{
				obj.style.background="";
			}
		},100);
	}


