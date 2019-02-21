$(function () {



  $('.myImg').mouseenter(function () {
    console.log(123);
  })    
  $('.myImg').mouseleave(function () {
    console.log(456);
  }) 
  $('#fullpage').fullpage({
    // 内容是否垂直居中 
    verticalCentered: false,
    // 右侧导航
    navigation: true,
    loopBottom:true,
    loopTop:true,
    onLeave: function (currentIndex, nextIndex, direction) {
      console.log(currentIndex,nextIndex);
      /* 
      背景 旋转
      第一屏不加 其他的都加
       */
      if (nextIndex != 1) {
        $("#qq_bg").addClass("qq_bg_rotate");
      } else {
        $("#qq_bg").removeClass("qq_bg_rotate");
      }

      if(currentIndex==1){
        // 从第1屏离开 重新加上 s1_main_begin
        $(".s1_main").addClass("s1_main_begin");
      }
      if(currentIndex==2){
        // 从第二屏离开
       
      }
      if(currentIndex==3){
        $(".s3_main").addClass("s3_main_begin");
      }
      if(currentIndex==4){
        $(".s4_main").addClass("s4_main_begin");
      }
    },
    afterLoad: function (linkName, index) {
      if(index==1){
        $(".s1_main").removeClass("s1_main_begin");
      }
      if(index==2){
        // $(".s2_main").removeClass("s2_main_begin");
      }
      if(index==3){
        $(".s3_main").removeClass("s3_main_begin");
      }
      if(index==4){
        $(".s4_main").removeClass("s4_main_begin");
      }

    }
  });
  $("#carousel_1").FtCarousel({
    index: 0,
    auto: true,
    time: 3000,
    indicators: true,
    buttons: true

  });
});