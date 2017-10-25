$(function(){
	var checkType ="";
	var windowWidth = $(window).width()
	var scaleRate = windowWidth<768 ? 1.2 : 2;
		//	首页轮播
	var mySwiper = new Swiper('.swiper-container1', {
		direction : 'vertical',
//		pagination: '.swiper-pagination',
		paginationClickable: true,
		mousewheelControl : true,
	  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate(swiper); //初始化完成开始动画
	  }, 
	  onSlideChangeStart:function(swiper){ 
	  	var activeIndex = swiper.activeIndex
	  	if(activeIndex == 1){
	  		$(".news-box").css({
				"background": "url('img/advertisement.png') no-repeat center",
				"background-size": "cover"
	  		})
	  	}
	  	if(activeIndex == 2){
	  		if($(".benefit-img img").eq(0).attr("src")){
	  			return
	  		} else{
		  		$(".benefit-img img").each(function(){
		  			var src = $(this).attr("dataSrc")
		  			$(this).attr("src",src)
		  		})	  			
	  		}

	  	}
	  	if(activeIndex == 3){
	  		if($(".case-list img").eq(0).attr("src")){
	  			return
	  		} else{
		  		$(".case-list img").each(function(){
		  			var src = $(this).attr("dataSrc")
		  			$(this).attr("src",src)
		  		})	  			
	  		}

	  	}	  	
	  	if(activeIndex == 1 || activeIndex == 3 || activeIndex == 4){
	  		$(".header").addClass("bl-bg")
	  	}else{
	  		$(".header").removeClass("bl-bg")	    
	  	}
	  },
	  onSlideChangeEnd: function(swiper){ 
	    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  }
	})	

	//	首页轮播
	var mySwiper2 = new Swiper('.swiper-container2', {
//		nested:true,
		effect : 'coverflow',
		slidesPerView: scaleRate,
		initialSlide:1,
		centeredSlides: true,
		grabCursor : true,
		loop: true,
		coverflow: {
			rotate: 20,
			slideShadows : false,
			stretch: 100,
		}
	})
	$(".service-more").click(function(){
		if($(".detail-img img").attr("src")){
			return
		} else{
			$(".detail-img img").each(function(){
	  			var src = $(this).attr("dataSrc")
	  			$(this).attr("src",src)
	  		})
		}
		$(".main").fadeOut(function(){
			$(".detail").fadeIn()
			$(window).scrollTop(0)
		})
	})
	$(".pk-logo").click(function(){
		$(".detail").fadeOut(function(){
			$(".main").fadeIn()
			$(window).scrollTop(0)
		})
	})
	$(".login").click(function(){
		location.href="http://shop.findfit.cn/#/login"
	})
	$(".register-input input").on("input",function(){
		var userName = $(this).val()
		changeType(userName)
	})
	function changeType(userName){
        if(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(userName)){
          checkType = "email"
        }else if(/^1[34578]\d{9}$/.test(userName)){
          checkType = "mobile"
        }else{
         	checkType = ""
        }		
	}
	$(".register-btn").click(function(){
		var userName = $(".register-input input").val()
		if(userName){
			changeType(userName)
		}
		if(checkType){
          location.href="http://shop.findfit.cn/#/register?account="+userName+"&type="+checkType
        }else{
          location.href="http://shop.findfit.cn/#/register"
        } 
	})
})