define(["jquery","template"],function($,template){

//获取热门品牌排行渲染
       function getXuanRan(){
           $.get("http://139.199.157.195:9090/api/getbrandtitle",function(data){
               console.log(data);
               $(".menu").html(template("brand_tpl",data))
               console.log(data);
           });

       }
    getXuanRan();

    $(".menu").on("click",".brand_d > a",function(){
        //获取标题的id
        var brandTitleId=$(this).attr("brandTitleId");
        location.href="/htmls/brand/v_index.html?brandtitleid="+brandTitleId;
    });

        //$(".a_click").on("click",function(){
        //    //var brandTitleId=$(this).attr("brandTitleId");
        //    location.href="htmls/brand/brandTitle.html";
        //    getXuanRan();
        //})
})
