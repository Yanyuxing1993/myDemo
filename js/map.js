(function () {

    mapOption = {
        title:{
            text:'发货热门省份地图',
            subtext:'16年10月统计数据'
        },
        tooltip: {
            trigger: 'axis'
        },
        dataRange: {
            orient: 'horizontal',
            min: 0,
            max: 55000,
            text: ['高', '低'],           // 文本，默认为数值文本
            splitNumber: 0
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false}
            }
        },
        series: [
            {
                name: '全国热门发货城市数据',
                type: 'map',
                mapType: 'china',
                mapLocation: {x: 'left'},
                selectedMode: 'multiple',
                itemStyle: {normal: {label: {show: true}}, emphasis: {label: {show: true}}},
                data: [
                    {name: '西藏', value: 605},
                    {name: '青海', value: 1670},
                    {name: '宁夏', value: 2102},
                    {name: '海南', value: 2522},
                    {name: '甘肃', value: 5020},
                    {name: '贵州', value: 5701},
                    {name: '新疆', value: 6610},
                    {name: '云南', value: 8893},
                    {name: '重庆', value: 10011},
                    {name: '吉林', value: 10568},
                    {name: '山西', value: 11237},
                    {name: '天津', value: 11307},
                    {name: '江西', value: 11702},
                    {name: '广西', value: 11720},
                    {name: '陕西', value: 12512},
                    {name: '黑龙江', value: 12582},
                    {name: '内蒙古', value: 14359},
                    {name: '安徽', value: 15300},
                    {name: '北京', value: 16251, selected: true},
                    {name: '福建', value: 17560},
                    {name: '上海', value: 19195, selected: true},
                    {name: '湖北', value: 19632},
                    {name: '湖南', value: 19669},
                    {name: '四川', value: 21026},
                    {name: '辽宁', value: 22226},
                    {name: '河北', value: 24515},
                    {name: '河南', value: 26931},
                    {name: '浙江', value: 32318},
                    {name: '山东', value: 45361},
                    {name: '江苏', value: 49110},
                    {name: '广东', value: 53210, selected: true}
                ]
            }
        ],
        animation: true
    };
    var hotPieOption = {
        tooltip:{
            trigger:'item'
        },

        legend: {
            x: 'right',
            selectedMode: false,
            data: ['北京', '上海', '广东']
        },

        series: [
            {
                name: '订单量及构成',
                type: 'pie',
                roseType: 'area',
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                radius: [30, 120],
                data: [
                    {name: '北京', value: 16251},
                    {name: '上海', value: 19195},
                    {name: '广东', value: 53210}
                ]
            }
        ],
        animation:true

    }
    var hotMapPie = echarts.init(document.getElementById("hotPie"));

    hotMapPie.setOption(hotPieOption);

    var hotMap = echarts.init(document.getElementById('hotMap'));

    hotMap.setOption(mapOption);

    $(window).on('resize',function(){

        hotMapPie.resize();
        hotMap.resize();

    })
    //当用户点击地图时触发的事件
    hotMap.on('mapselectchanged', function (param) {

        var selected = param.selected;  //被选中的元素列表

        var mapSeries = mapOption.series[0];    //地图配置的全部内容

        var data = [];

        var legendData = [];

        var name;

        for (var p = 0, len = mapSeries.data.length; p < len; p++) {

            name = mapSeries.data[p].name;  //读取被点击的地图数据

            mapSeries.data[p].selected = selected[name];    //保持被选中状态

            if (selected[name]) {
                data.push({
                    name: name,
                    value: mapSeries.data[p].value
                });
                legendData.push(name);
            }
        }
        hotPieOption.legend.data = legendData;
        hotPieOption.series[0].data = data;
        hotMapPie.setOption(hotPieOption, true);
    })


})();

