function drawRadar() {

    var radarOption = {
        title: {
            text: "本店&行业平均"
        },
        tooltip: {},
        legend: {
            orient: "vertical",
            x: "right",
            y: "bottom",
            data: ["本店评价", "行业平均"]
        },
        toolbox: {
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        polar: [
            {
                indicator: [
                    {
                        text: "服务相关",
                        min: 0,
                        max: 5
                    },
                    {
                        text: "包装相关",
                        min: 0,
                        max: 5
                    },
                    {
                        text: "商品相关",
                        min: 0,
                        max: 5
                    },
                    {
                        text: "售后相关",
                        min: 0,
                        max: 5
                    },
                    {
                        text: "物流两罐",
                        min: 0,
                        max: 5
                    }
                ]
            }
        ],
        calculable: true,
        series: [
            {
                name: "本店评价",
                type: "radar",
                data: [
                    {
                        value: [4, 4.5, 4.6, 4.8, 4.7],
                        name: "本店评价"
                    }
                ]
            },
            {
                name: "行业平均",
                type: "radar",
                data: [
                    {
                        value: [5, 5, 5, 5, 4.9],
                        name: "行业平均"
                    }
                ]
            }
        ],
        animation:true
    };

    var radar = echarts.init(document.getElementById('radar'));

    radar.setOption(radarOption);

}


/*
* 关闭模态框按钮
*
* */
function modealOut(){

    $(".modeal-container").fadeOut();


    $('body').removeClass("modeal-open");
}

// 当关闭点击关闭按钮时候
$("#modealClose").on("click",function(){

    modealOut();

    return false;
})

//当模态框外面被点击时
$(".modeal-container").on("click",function(e){
    if(e.target == this){

        modealOut();

    }
});
$("#Goodscontent").on("click","a",function () {


    $(".modeal-container").fadeIn();

    drawRadar();

    $('body').addClass("modeal-open");

    return false;

})
