<template>
    <div class="allScenicSpot">
        <div class="left">
            <div class="scenicSpots">
                <img class="img1" src="../assets/images/ic_icon1.png" alt="" />
                <img class="img2" src="../assets/images/ic_icon2.png" alt="" />
                <img class="img3" src="../assets/images/ic_icon3.png" alt="" />
                <img class="img4" src="../assets/images/ic_icon4.png" alt="" />
                <div class="title">
                    <img src="../assets/images/ic_jqgl.png" alt="" />
                </div>
                <div class="scenicSpots_main">
                    <div id="general"></div>
                    <div>
                        <table>
                            <tr>
                                <td>景点总数</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>人员总数</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <td>车位总数</td>
                                <td>1300</td>
                            </tr>
                            <tr>
                                <td>售票窗口</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>自动售票机</td>
                                <td>10</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="ticketSelling scenicSpots">
                <img class="img1" src="../assets/images/ic_icon1.png" alt="" />
                <img class="img2" src="../assets/images/ic_icon2.png" alt="" />
                <img class="img3" src="../assets/images/ic_icon3.png" alt="" />
                <img class="img4" src="../assets/images/ic_icon4.png" alt="" />
                <div class="title">
                    <img src="../assets/images/ic_spqdq.png" alt="" />
                </div>
                <div id="ticketSelling"></div>
            </div>
            <div class="safetyPatrol scenicSpots">
                <img class="img1" src="../assets/images/ic_icon1.png" alt="" />
                <img class="img2" src="../assets/images/ic_icon2.png" alt="" />
                <img class="img3" src="../assets/images/ic_icon3.png" alt="" />
                <img class="img4" src="../assets/images/ic_icon4.png" alt="" />
                <div class="title">
                    <img src="../assets/images/ic_aqxj.png" alt="" />
                </div>
                <div id="safetyPatrol"></div>
            </div>
        </div>
        <div class="main">
            <div class="main_box">
                <div class="boxs" @mousewheel.prevent="rollImg">
                    <div ref="map" class="maps">
                        <img
                            src="../assets/images/maps.png"
                            @mousedown="move"
                        />
                        <div v-for="(item, index) in mapList" :key="index">
                            <div
                                class="spot"
                                :style="{
                                    left: item.x + 'rem',
                                    top: item.y + 'rem',
                                }"
                                v-if="item.type == 1"
                            >
                                <span>{{ item.title }}</span>
                                <div class="pops" v-if="item.show">
                                    <div class="danshen">{{ item.title }}</div>
                                    <div>当前游客数:125人</div>
                                    <div>当前设备数:3台</div>
                                </div>
                                <!-- <img
                                    src="../assets/images/playNanem.png"
                                    @click="checkOpen(item)"
                                /> -->
                                <div class="grad2" @click="checkOpen(item)">
                                    <div class="biggest">
                                        <div class="middle">
                                            <div class="inner"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                v-else
                                :style="{
                                    left: item.x + 'rem',
                                    top: item.y + 'rem',
                                }"
                                class="equipment"
                            >
                                <img src="../assets/images/ic_sb.png" v-if="item.isNormal" @click="checkOpen(item)" />
                                <img src="../assets/images/addIcon.png" v-else @click="checkOpen(item)" />
                                <span>{{ item.title }}</span>
                                <div class="pops" v-if="item.show">
                                    <div class="danshen">{{ item.title }}</div>
                                    <div>设备状态：{{item.isNormal?'正常':'异常'}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="infoTotal">
                        <div class="tit">累计接待游客总数</div>
                        <div class="total">&yen;185,088</div>
                        <div class="outher">
                            <div>
                                <div>今日游客数</div>
                                <div>
                                    <img
                                        src="../assets/images/jiantouTwo.png"
                                    />
                                    <span>5000</span>
                                </div>
                            </div>
                            <div>
                                <div>昨日游客数</div>
                                <div>
                                    <img
                                        src="../assets/images/jiantouOne.png"
                                    />
                                    <span>5000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="earlyWarning">
                <img class="img1" src="../assets/images/ic_icon1.png" alt="" />
                <img class="img2" src="../assets/images/ic_icon2.png" alt="" />
                <img class="img3" src="../assets/images/ic_icon3.png" alt="" />
                <img class="img4" src="../assets/images/ic_icon4.png" alt="" />
                <div class="title">
                    <div
                        :class="[
                            activeWarning == true ? 'activeWarning' : '',
                            'left',
                        ]"
                        @click="tabCheck('1')"
                    >
                        <img
                            src="../assets/images/btn_aqxj_pre.png"
                            v-if="activeWarning"
                            alt=""
                        />
                        <img
                            src="../assets/images/btn_aqxj_nor.png"
                            v-else
                            alt=""
                        />
                        <div>安全巡检预警</div>
                    </div>
                    <div
                        :class="[
                            activeWarning == false ? 'activeWarning' : '',
                            'right',
                        ]"
                        @click="tabCheck('2')"
                    >
                        <img
                            src="../assets/images/btn_lb_nor.png"
                            v-if="activeWarning"
                            alt=""
                        />
                        <img
                            src="../assets/images/btn_lb_pre.png"
                            v-else
                            alt=""
                        />
                        <div>人流预警</div>
                    </div>
                </div>
                <div class="warningMain">
                    <vue-seamless-scroll
                        :data="listData"
                        :class-option="defaultOption"
                    >
                        <ul class="ul-scoll">
                            <li v-for="(item, index) in listData" :key="index">
                                <p>{{ item.text }}</p>
                                <p>{{ item.name }}</p>
                                <p>{{ item.time }}</p>
                            </li>
                        </ul>
                    </vue-seamless-scroll>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="parkingLot">
                <img class="img1" src="../assets/images/ic_icon1.png" alt="" />
                <img class="img2" src="../assets/images/ic_icon2.png" alt="" />
                <img class="img3" src="../assets/images/ic_icon3.png" alt="" />
                <img class="img4" src="../assets/images/ic_icon4.png" alt="" />
                <div id="parkingLot"></div>
            </div>
            <div class="parkingLot usageTrend">
                <img class="img1" src="../assets/images/ic_icon1.png" alt="" />
                <img class="img2" src="../assets/images/ic_icon2.png" alt="" />
                <img class="img3" src="../assets/images/ic_icon3.png" alt="" />
                <img class="img4" src="../assets/images/ic_icon4.png" alt="" />
                <div id="usageTrend"></div>
            </div>
            <div class="parkingLot salesRanking">
                <img class="img1" src="../assets/images/ic_icon1.png" alt="" />
                <img class="img2" src="../assets/images/ic_icon2.png" alt="" />
                <img class="img3" src="../assets/images/ic_icon3.png" alt="" />
                <img class="img4" src="../assets/images/ic_icon4.png" alt="" />
                <div class="title">
                    <img src="../assets/images/ic_xlphb.png" alt="" />
                </div>
                <div id="salesRanking"></div>
            </div>
        </div>
    </div>
</template>

<script>
import * as echarts from "echarts";
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
    components: {
        vueSeamlessScroll,
    },
    data() {
        return {
            generalChart: null,
            ticketChart: null,
            safetyPatrolChart: null,
            parkingLotChart: null,
            usageTrendChart: null,
            salesRankingChart: null,
            activeWarning: true,
            listData: [
                {
                    text:
                        "预警：张三巡查xxx设备时发现异常情况，请及时安排相关人员处理！",
                    name: "丰收礼赞",
                    time: "2021年6月28日 17:24",
                },
                {
                    text:
                        "预警：张三巡查xxx设备时发现异常情况，请及时安排相关人员处理！",
                    name: "幸福农庄",
                    time: "2021年6月28日 17:24",
                },
                {
                    text:
                        "预警：张三巡查xxx设备时发现异常情况，请及时安排相关人员处理！",
                    name: "鱼藕园",
                    time: "2021年6月28日 17:24",
                },
            ],
            mapList: [
                { type: 1, x: 119, y: 253, title: "贡橘园", show: false },
                { type: 1, x: 118, y: 272, title: "亲子采摘园", show: false },
                { type: 1, x: 143, y: 243, title: "亲子乐园", show: false },
                { type: 1, x: 139, y: 269, title: "夜色游园", show: false },
                { type: 1, x: 163, y: 250, title: "鱼藕园", show: false },
                { type: 1, x: 168, y: 267, title: "生态停车场", show: false },
                { type: 1, x: 167, y: 229, title: "智慧停车场", show: false },
                { type: 1, x: 175, y: 235, title: "餐饮中心", show: false },
                { type: 1, x: 210, y: 227, title: "花海园", show: false },
                { type: 1, x: 212, y: 244, title: "接待中心", show: false },
                { type: 1, x: 244, y: 213, title: "会议中心", show: false },
                { type: 1, x: 337, y: 154, title: "贡橘园", show: false },
                { type: 1, x: 359, y: 144, title: "竹林民宿", show: false },
                { type: 1, x: 373, y: 147, title: "雅竹园", show: false },

                { type: 2, x: 110, y: 265, show: false, title: "A",isNormal:false },
                { type: 2, x: 116.5, y: 278, show: false, title: "B",isNormal:true },
                { type: 2, x: 129, y: 275, show: false, title: "C",isNormal:true },
                { type: 2, x: 145, y: 274, show: false, title: "D",isNormal:true},
                { type: 2, x: 134.5, y: 252.5, show: false, title: "E",isNormal:false },
                { type: 2, x: 135.9, y: 248.5, show: false, title: "F",isNormal:true },
                { type: 2, x: 142.9, y: 248.3, show: false, title: "G",isNormal:true },
                { type: 2, x: 150.5, y: 258.3, show: false, title: "H",isNormal:true },
                { type: 2, x: 152, y: 240, show: false, title: "I",isNormal:true },
                { type: 2, x: 161.5, y: 270, show: false, title: "N",isNormal:false },
                { type: 2, x: 165, y: 269, show: false, title: "J",isNormal:true },
                { type: 2, x: 172.5, y: 259, show: false, title: "K",isNormal:false },
                { type: 2, x: 177.5, y: 262, show: false, title: "L",isNormal:false },
                { type: 2, x: 159.5, y: 235, show: false, title: "M",isNormal:true },
                { type: 2, x: 160.5, y: 239, show: false, title: "O",isNormal:true },
                { type: 2, x: 165.5, y: 249, show: false, title: "P",isNormal:true },
                {type:2,x:159.5,y:226,show:false,title:"Q",isNormal:true},
                {type:2,x:173.5,y:223,show:false,title:"R",isNormal:true},
                {type:2,x:179,y:226,show:false,title:"S",isNormal:true},
                {type:2,x:173,y:242,show:false,title:"T",isNormal:true},
                {type:2,x:190,y:224,show:false,title:"U",isNormal:true},
                {type:2,x:187.5,y:240,show:false,title:"V",isNormal:true},
                {type:2,x:190,y:249,show:false,title:"W",isNormal:true},
                {type:2,x:192,y:258,show:false,title:"X",isNormal:true},
                {type:2,x:202,y:253,show:false,title:"Y",isNormal:false},
                {type:2,x:204,y:244,show:false,title:"Z",isNormal:true},
                {type:2,x:194,y:233,show:false,title:"A1",isNormal:true},
                {type:2,x:202.5,y:225,show:false,title:"A2",isNormal:true},
                {type:2,x:209.5,y:235,show:false,title:"A3",isNormal:false},
                {type:2,x:216.5,y:244,show:false,title:"A4",isNormal:true},
                {type:2,x:219.5,y:237,show:false,title:"A5",isNormal:false},
                {type:2,x:231.5,y:235,show:false,title:"A6",isNormal:true},
                {type:2,x:211.5,y:226,show:false,title:"A7",isNormal:true},
                {type:2,x:206.5,y:215,show:false,title:"A8",isNormal:true},
                {type:2,x:221,y:222,show:false,title:"A9",isNormal:true},
                {type:2,x:229.5,y:222,show:false,title:"B1",isNormal:true},
                {type:2,x:235.5,y:222,show:false,title:"B2",isNormal:false},
                {type:2,x:229.5,y:212,show:false,title:"B3",isNormal:true},
                {type:2,x:234.5,y:211,show:false,title:"B4",isNormal:true},
                {type:2,x:221,y:206,show:false,title:"B5",isNormal:true},
                {type:2,x:244,y:227,show:false,title:"B6",isNormal:true},
                {type:2,x:252.7,y:218,show:false,title:"B7",isNormal:true},
                {type:2,x:256.7,y:218,show:false,title:"B8",isNormal:true},
                {type:2,x:253,y:208,show:false,title:"B9",isNormal:false},
                {type:2,x:245.7,y:207,show:false,title:"C1",isNormal:true},
                {type:2,x:242,y:196,show:false,title:"C2",isNormal:false},
                {type:2,x:260,y:186,show:false,title:"C3",isNormal:true},
                {type:2,x:270.5,y:208,show:false,title:"C4",isNormal:false},
                {type:2,x:284.5,y:199,show:false,title:"C5",isNormal:true},
                {type:2,x:299.5,y:190,show:false,title:"C6",isNormal:true},
                {type:2,x:282.3,y:173.5,show:false,title:"C7",isNormal:false},
                {type:2,x:306.3,y:160.5,show:false,title:"C8",isNormal:true},
                {type:2,x:323.3,y:173,show:false,title:"C9",isNormal:true},
                {type:2,x:337.6,y:163.5,show:false,title:"D1",isNormal:true},
                {type:2,x:329,y:148,show:false,title:"D2",isNormal:true},
                {type:2,x:347.3,y:138.5,show:false,title:"D3",isNormal:true},
                {type:2,x:349.5,y:154,show:false,title:"D4",isNormal:false},
                {type:2,x:358,y:141.5,show:false,title:"D5",isNormal:true},
                {type:2,x:364,y:143.5,show:false,title:"D6",isNormal:true},
                {type:2,x:366,y:128,show:false,title:"D7",isNormal:true},
                {type:2,x:379,y:117.5,show:false,title:"D8",isNormal:true},
                {type:2,x:393,y:108.5,show:false,title:"D9",isNormal:true},
                {type:2,x:407,y:98.5,show:false,title:"E1",isNormal:true},
                {type:2,x:421.5,y:89,show:false,title:"E2",isNormal:true},
                {type:2,x:440.5,y:76,show:false,title:"E3",isNormal:true},
                {type:2,x:464,y:61.5,show:false,title:"E4",isNormal:false},
                {type:2,x:466.5,y:67.5,show:false,title:"E5",isNormal:true},
                {type:2,x:470,y:80.5,show:false,title:"E6",isNormal:true},
                {type:2,x:483,y:70.5,show:false,title:"E7",isNormal:false},
                {type:2,x:496,y:84.5,show:false,title:"E8",isNormal:true},
                {type:2,x:507,y:65.5,show:false,title:"E9",isNormal:true},
            ],
        };
    },
    computed: {
        defaultOption() {
            return {
                step: 0.5, // 数值越大速度滚动越快
                limitMoveNum: this.listData.length, // 开始无缝滚动的数据量 this.dataList.length
                hoverStop: true, // 是否开启鼠标悬停stop
                direction: 1, // 0向下 1向上 2向左 3向右
                openWatch: true, // 开启数据实时监控刷新dom
                singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
                singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
                waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
            };
        },
    },
    mounted() {
        this.general();
        this.ticketSelling();
        this.safetyPatrol();
        this.parkingLot();
        this.usageTrend();
        let arr = [
            { name: "丰收礼赞", value: 740 },
            { name: "未来田园", value: 900 },
            { name: "幸福农庄", value: 1302 },
            { name: "丰收礼赞", value: 1494 },
            { name: "未来田园", value: 1526 },
            { name: "未来田园", value: 2406 },
            { name: "菜花园", value: 1560 },
            { name: "未来田园", value: 1960 },
            { name: "菜花园", value: 2100 },
        ];
        arr.sort(this.sortArr("value"));
        let arrName = [];
        let arrValue = [];
        arr.forEach((item) => {
            arrName.push(item.name);
            arrValue.push(item.value);
        });
        this.salesRanking(arrName, arrValue);
        this.$root.$on("resize", (item) => {
            if (item) {
                setTimeout(() => {
                    this.generalChart.resize();
                    this.ticketChart.resize();
                    this.safetyPatrolChart.resize();
                    this.parkingLotChart.resize();
                    this.usageTrendChart.resize();
                    this.salesRankingChart.resize();
                }, 0);
            }
        });
    },

    methods: {
        // 排序
        sortArr(property) {
            return function (a, b) {
                var value1 = a[property];
                var value2 = b[property];
                return value1 - value2;
            };
        },
        // 景区概览
        general() {
            // 基于准备好的dom，初始化echarts实例
            let colorList = [
                "#73DDFF",
                "#73ACFF",
                "#FDD56A",
                "#FDB36A",
                "#FD866A",
            ];
            this.generalChart = echarts.init(
                document.getElementById("general")
            );
            // 绘制图表
            this.generalChart.setOption({
                grid: {
                    top: "10%",
                    left: "22%",
                    bottom: "10%",
                    right: "5%",
                },
                series: [
                    {
                        //饼图
                        type: "pie",
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    return colorList[params.dataIndex];
                                },
                            },
                        },
                        center: ["51%", "50%"],
                        radius: ["20%", "40%"],
                        left:'-5%',
                        top:'-5%',
                        right:'-5%',
                        bottom:'-5%',
                        label: { normal: { fontSize:8 } },
                        data: [
                            {
                                value: 35,
                                name: "从业人员 35%",
                                label: { normal: { color: colorList[0] } }
                            },
                            {
                                value: 15,
                                name: "安保人员 15%",
                                label: { normal: { color: colorList[1] } }
                            },
                            {
                                value: 20,
                                name: "保洁人员 20%",
                                label: { normal: { color: colorList[2] } }
                            },
                            {
                                value: 20,
                                name: "服务人员 20%",
                                label: { normal: { color: colorList[3] } }
                            },
                            {
                                value: 10,
                                name: "其他 10%",
                                label: { normal: { color: colorList[4] } }
                            },
                        ]
                    },
                ],
            });
        },
        // 售票渠道趋势分析
        ticketSelling() {
            // 基于准备好的dom，初始化echarts实例
            this.ticketChart = echarts.init(
                document.getElementById("ticketSelling")
            );
            // 绘制图表
            this.ticketChart.setOption({
                grid: {
                    top: "10%",
                    left: "15%",
                    bottom: "30%",
                    right: "5%",
                },
                legend: {
                    show: true,
                    // right: "10%",
                    bottom: "10%",
                    itemGap: 35,
                    itemWidth: 15,
                    itemHeight: 10,
                    padding: [20, 0, 0, 20],
                    data: [
                        {
                            name: "窗口售票",
                            textStyle: {
                                color: "#CAF2F5",
                            },
                            itemStyle: {
                                color: "#50FCFC",
                            },
                        },
                        {
                            name: "自主售票",
                            textStyle: {
                                color: "#CAF2F5",
                            },
                            itemStyle: {
                                color: "#FF9E17",
                            },
                        },
                        {
                            name: "线上售票",
                            textStyle: {
                                color: "#CAF2F5",
                            },
                            itemStyle: {
                                color: "#00A0E9",
                            },
                        },
                    ],
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        lineStyle: {
                            width: 0,
                        },
                    },
                    padding: [10, 40, 10, 10],
                    backgroundColor: "#0F3270",
                    borderColor: "#1F63A3",
                    textStyle: {
                        color: "#CAF2F5",
                    },
                    formatter: function (params) {
                        var result = "";
                        params.forEach(function (item) {
                            result +=
                                item.marker +
                                item.seriesName +
                                "：" +
                                item.value +
                                "<br>";
                        });
                        return `
                        <div>
                            <p>售票渠道</p>
                            ${result}
                        </div>
                `;
                    },
                },
                xAxis: [
                    {
                        type: "category",
                        data: [
                            "6:00",
                            "8:00",
                            "10:00",
                            "12:00",
                            "14:00",
                            "16:00",
                            "18:00",
                            "20:00",
                            "22:00",
                            "24:00",
                        ],
                        axisLine: {
                            lineStyle: {
                                color: "#1F63A3",
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            interval: 0,
                            textStyle: {
                                color: "#8A9ECF",
                            },
                            // 默认x轴字体大小
                            fontSize: 12,
                            // margin:文字到x轴的距离
                        },
                        boundaryGap: false,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: "solid",
                                color: "#1F63A3",
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: "value",
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "#1F63A3",
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#8A9ECF",
                            },
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: "solid",
                                color: "#1F63A3",
                            },
                        },
                    },
                    {
                        type: "value",
                        position: "right",
                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#0173DA",
                            },
                            formatter: "{value}",
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "#0173DA",
                            },
                        },
                        splitLine: {
                            show: false,
                        },
                    },
                ],
                series: [
                    {
                        name: "窗口售票",
                        type: "line",
                        data: [
                            100,
                            300,
                            600,
                            1200,
                            1500,
                            300,
                            2700,
                            1000,
                            400,
                            800,
                        ],
                        symbolSize: 1,
                        symbol: "circle",
                        smooth: true,
                        yAxisIndex: 0,
                        showSymbol: false,
                        lineStyle: {
                            width: 1.5,
                            color: "#00DAFF",
                        },
                        itemStyle: {
                            normal: {
                                color: "#00DAFF",
                                borderColor: "#00DAFF",
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: "#4FF9FA",
                                        },
                                        {
                                            offset: 0.8,
                                            color: "#071652",
                                        },
                                    ],
                                    false
                                ),
                            },
                        },
                    },
                    {
                        name: "自主售票",
                        type: "line",
                        data: [
                            500,
                            1200,
                            1100,
                            1400,
                            2500,
                            1600,
                            1000,
                            2400,
                            800,
                            1400,
                        ],
                        symbolSize: 1,
                        symbol: "circle",
                        smooth: true,
                        yAxisIndex: 0,
                        showSymbol: false,
                        lineStyle: {
                            width: 1.5,
                            color: "#FF9E17",
                        },
                        itemStyle: {
                            normal: {
                                color: "#FF9E17",
                                borderColor: "#FF9E17",
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: "#FF9E17",
                                        },
                                        {
                                            offset: 0.8,
                                            color: "#071755",
                                        },
                                    ],
                                    false
                                ),
                            },
                        },
                    },
                    {
                        name: "线上售票",
                        type: "line",
                        data: [
                            700,
                            1500,
                            600,
                            1000,
                            2000,
                            1800,
                            1600,
                            1700,
                            1800,
                            1400,
                        ],
                        symbolSize: 1,
                        symbol: "circle",
                        smooth: true,
                        yAxisIndex: 0,
                        showSymbol: false,
                        lineStyle: {
                            width: 1.5,
                            color: "#0097e0",
                        },
                        itemStyle: {
                            normal: {
                                color: "#00A0E9",
                                borderColor: "#00A0E9",
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: "#0097e0",
                                        },
                                        {
                                            offset: 0.8,
                                            color: "#021a5d",
                                        },
                                    ],
                                    false
                                ),
                            },
                        },
                    },
                ],
            });
        },
        // 安全巡检概览
        safetyPatrol() {
            let colorList = ["#CD2EF8", "#6A37FD", "#35D0E9"];
            // 基于准备好的dom，初始化echarts实例
            this.safetyPatrolChart = echarts.init(
                document.getElementById("safetyPatrol")
            );
            // 绘制图表
            this.safetyPatrolChart.setOption({
                title: {
                    text: "200",
                    subtext: "巡检景点设备总数",
                    textStyle: {
                        fontSize: 16,
                        color: "#71797b",
                        lineHeight: 16,
                    },
                    subtextStyle: {
                        fontSize: 10,
                        color: "#9ca4a7",
                    },
                    textAlign: "center",
                    left: "28.5%",
                    top: "38%",
                },
                tooltip: {
                    trigger: "item",
                },
                legend: {
                    type: "scroll",
                    orient: "vertical",
                    right: "5%",
                    top: "center",
                    itemGap: 30,
                    selectedMode: false,
                    icon: "pin",
                    data: ["未巡检", "已巡检（异常）", "已巡检(正常)"],
                    textStyle: {
                        // color: "#77899c",
                        rich: {
                            uname: {
                                width: 30,
                                fontSize: 12,
                                height: 30,
                                color: "#FFFFFF",
                            },
                            unum: {
                                width: 40,
                                fontSize: 10,
                                color: "#7BBCEE",
                            },
                        },
                    },
                    formatter: [
                        "{uname|{name}}",
                        "{unum|设备数200，占比35%}",
                    ].join("\n"),
                },
                color: colorList,
                series: [
                    {
                        name: "巡检景点设备",
                        type: "pie",
                        radius: [50, 80],
                        center: ["30%", "50%"],
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                        data: [
                            { name: "未巡检", value: 35 },
                            { name: "已巡检（异常）", value: 50 },
                            { name: "已巡检(正常)", value: 15 },
                        ],
                    },
                ],
            });
        },
        // 停车场实时流量趋势
        parkingLot() {
            // 基于准备好的dom，初始化echarts实例
            this.parkingLotChart = echarts.init(
                document.getElementById("parkingLot")
            );
            // 绘制图表
            this.parkingLotChart.setOption({
                title: {
                    text: " {a|}",
                    padding: [10, 0, 10, 0],
                    show: true,
                    textStyle: {
                        fontFamily: "幼圆",
                        lineHeight: 20,
                        rich: {
                            a: {
                                color: "#FFF",
                                fontSize: "12",
                                height: 40,
                                width: 180,
                                backgroundColor: {
                                    image: require("../assets/images/ic_tccss.png"),
                                },
                            },
                        },
                    },
                },
                grid: {
                    top: "25%",
                    left: "15%",
                    bottom: "15%",
                    right: "8%",
                },
                legend: {
                    show: true,
                    right: "0%",
                    top: "5%",
                    itemGap: 5,
                    itemWidth: 15,
                    itemHeight: 10,
                    // padding: [20, 0, 0, 20],
                    data: [
                        {
                            name: "停车场A",
                            textStyle: {
                                color: "#CAF2F5",
                                fontSize: 10,
                            },
                            itemStyle: {
                                color: "#50FCFC",
                                fontSize: 10,
                            },
                        },
                        {
                            name: "停车场B",
                            textStyle: {
                                color: "#CAF2F5",
                                fontSize: 10,
                            },
                            itemStyle: {
                                color: "#FF9E17",
                                fontSize: 10,
                            },
                        },
                        {
                            name: "停车场C",
                            textStyle: {
                                color: "#CAF2F5",
                                fontSize: 10,
                            },
                            itemStyle: {
                                color: "#00A0E9",
                                fontSize: 10,
                            },
                        },
                    ],
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        lineStyle: {
                            width: 0,
                        },
                    },
                    padding: [10, 40, 10, 10],
                    backgroundColor: "#0F3270",
                    borderColor: "#1F63A3",
                    textStyle: {
                        color: "#CAF2F5",
                    },
                    formatter: function (params) {
                        var result = "";
                        params.forEach(function (item) {
                            result +=
                                item.marker +
                                item.seriesName +
                                "：" +
                                item.value +
                                "<br>";
                        });
                        return `
                        <div>
                            <p>车辆数</p>
                            ${result}
                        </div>
                `;
                    },
                },
                xAxis: [
                    {
                        type: "category",
                        data: [
                            "0:00",
                            "6:00",
                            "12:00",
                            "14:00",
                            "18:00",
                            "20:00",
                            "22:00",
                            "24:00",
                        ],
                        boundaryGap: false,
                    },
                ],
                // yAxis: {
                //     type: "value",
                // },
                yAxis: [
                    {
                        type: "value",
                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#8A9ECF",
                            },
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: "solid",
                                color: "#1F63A3",
                            },
                        },
                    },
                    {
                        type: "value",
                        position: "right",
                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#0173DA",
                            },
                            formatter: "{value}",
                        },
                        splitLine: {
                            show: false,
                        },
                    },
                ],
                series: [
                    {
                        name: "停车场A",
                        type: "line",
                        data: [
                            100,
                            300,
                            600,
                            1200,
                            1500,
                            300,
                            2700,
                            1000,
                            400,
                            800,
                        ],
                        // symbolSize: 1,
                        // symbol: "circle",
                        // smooth: true,
                        // yAxisIndex: 0,
                        // showSymbol: false,
                        lineStyle: {
                            width: 1.5,
                            color: "#00DAFF",
                        },
                        itemStyle: {
                            normal: {
                                color: "#00DAFF",
                                borderColor: "#00DAFF",
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: "#4FF9FA",
                                        },
                                        {
                                            offset: 0.3,
                                            color: "#071652",
                                        },
                                    ],
                                    false
                                ),
                            },
                        },
                    },
                    {
                        name: "停车场B",
                        type: "line",
                        data: [
                            500,
                            1200,
                            1100,
                            1400,
                            2500,
                            1600,
                            1000,
                            2400,
                            800,
                            1400,
                        ],
                        // symbolSize: 1,
                        // symbol: "circle",
                        // smooth: true,
                        // yAxisIndex: 0,
                        // showSymbol: false,
                        lineStyle: {
                            width: 1.5,
                            color: "#FF9E17",
                        },
                        itemStyle: {
                            normal: {
                                color: "#FF9E17",
                                borderColor: "#FF9E17",
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: "#FF9E17",
                                        },
                                        {
                                            offset: 0.3,
                                            color: "#071755",
                                        },
                                    ],
                                    false
                                ),
                            },
                        },
                    },
                    {
                        name: "停车场C",
                        type: "line",
                        data: [
                            700,
                            1500,
                            600,
                            1000,
                            2000,
                            1800,
                            1600,
                            1700,
                            1800,
                            1400,
                        ],
                        // symbolSize: 1,
                        // symbol: "circle",
                        // smooth: true,
                        // yAxisIndex: 0,
                        // showSymbol: false,
                        lineStyle: {
                            width: 1.5,
                            color: "#0097e0",
                        },
                        itemStyle: {
                            normal: {
                                color: "#00A0E9",
                                borderColor: "#00A0E9",
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: "#0097e0",
                                        },
                                        {
                                            offset: 0.3,
                                            color: "#021a5d",
                                        },
                                    ],
                                    false
                                ),
                            },
                        },
                    },
                ],
            });
        },
        // 实时使用趋势分析
        usageTrend() {
            // 基于准备好的dom，初始化echarts实例
            this.usageTrendChart = echarts.init(
                document.getElementById("usageTrend")
            );
            // 绘制图表
            this.usageTrendChart.setOption({
                title: {
                    text: " {a|}",
                    padding: [10, 0, 10, 0],
                    show: true,
                    textStyle: {
                        fontFamily: "幼圆",
                        lineHeight: 20,
                        rich: {
                            a: {
                                color: "#FFF",
                                fontSize: "12",
                                height: 40,
                                width: 180,
                                backgroundColor: {
                                    image: require("../assets/images/ic_sssyqs.png"),
                                },
                            },
                        },
                    },
                },
                grid: {
                    top: "25%",
                    left: "15%",
                    bottom: "15%",
                    right: "8%",
                },
                legend: {
                    show: true,
                    right: "0%",
                    top: "5%",
                    itemGap: 5,
                    itemWidth: 15,
                    itemHeight: 10,
                    // padding: [20, 0, 0, 20],
                    data: [
                        {
                            name: "停车场A",
                            textStyle: {
                                color: "#CAF2F5",
                                fontSize: 10,
                            },
                            itemStyle: {
                                color: "#50FCFC",
                                fontSize: 10,
                            },
                        },
                        {
                            name: "停车场B",
                            textStyle: {
                                color: "#CAF2F5",
                                fontSize: 10,
                            },
                            itemStyle: {
                                color: "#FF9E17",
                                fontSize: 10,
                            },
                        },
                        {
                            name: "停车场C",
                            textStyle: {
                                color: "#CAF2F5",
                                fontSize: 10,
                            },
                            itemStyle: {
                                color: "#00A0E9",
                                fontSize: 10,
                            },
                        },
                    ],
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        lineStyle: {
                            width: 0,
                        },
                    },
                    padding: [10, 40, 10, 10],
                    backgroundColor: "#0F3270",
                    borderColor: "#1F63A3",
                    textStyle: {
                        color: "#CAF2F5",
                    },
                    formatter: function (params) {
                        var result = "";
                        params.forEach(function (item) {
                            result +=
                                item.marker +
                                item.seriesName +
                                "：" +
                                item.value +
                                "<br>";
                        });
                        return `
                        <div>
                            <p>车辆数</p>
                            ${result}
                        </div>
                `;
                    },
                },
                xAxis: [
                    {
                        type: "category",
                        data: [
                            "0:00",
                            "6:00",
                            "12:00",
                            "14:00",
                            "18:00",
                            "20:00",
                            "22:00",
                            "24:00",
                        ],
                        boundaryGap: false,
                    },
                ],
                // yAxis: {
                //     type: "value",
                // },
                yAxis: [
                    {
                        type: "value",
                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#8A9ECF",
                            },
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: "solid",
                                color: "#1F63A3",
                            },
                        },
                    },
                    {
                        type: "value",
                        position: "right",
                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#0173DA",
                            },
                            formatter: "{value}",
                        },
                        splitLine: {
                            show: false,
                        },
                    },
                ],
                series: [
                    {
                        name: "停车场A",
                        type: "line",
                        data: [
                            100,
                            300,
                            600,
                            1200,
                            1500,
                            300,
                            2700,
                            1000,
                            400,
                            800,
                        ],
                        symbolSize: 1,
                        symbol: "circle",
                        smooth: true,
                        yAxisIndex: 0,
                        showSymbol: false,
                        lineStyle: {
                            width: 1.5,
                            color: "#00DAFF",
                        },
                        itemStyle: {
                            normal: {
                                color: "#00DAFF",
                                borderColor: "#00DAFF",
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 1,
                                            color: "#4FF9FA",
                                        },
                                        {
                                            offset: 1,
                                            color: "#071652",
                                        },
                                    ],
                                    false
                                ),
                            },
                        },
                    },
                    {
                        name: "停车场B",
                        type: "line",
                        data: [
                            500,
                            1200,
                            1100,
                            1400,
                            2500,
                            1600,
                            1000,
                            2400,
                            800,
                            1400,
                        ],
                        symbolSize: 1,
                        symbol: "circle",
                        smooth: true,
                        yAxisIndex: 0,
                        showSymbol: false,
                        lineStyle: {
                            width: 1.5,
                            color: "#FF9E17",
                        },
                        itemStyle: {
                            normal: {
                                color: "#FF9E17",
                                borderColor: "#FF9E17",
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0.8,
                                            color: "#FF9E17",
                                        },
                                        {
                                            offset: 0.8,
                                            color: "#071755",
                                        },
                                    ],
                                    false
                                ),
                            },
                        },
                    },
                    {
                        name: "停车场C",
                        type: "line",
                        data: [
                            700,
                            1500,
                            600,
                            1000,
                            2000,
                            1800,
                            1600,
                            1700,
                            1800,
                            1400,
                        ],
                        symbolSize: 1,
                        symbol: "circle",
                        smooth: true,
                        yAxisIndex: 0,
                        showSymbol: false,
                        lineStyle: {
                            width: 1.5,
                            color: "#0097e0",
                        },
                        itemStyle: {
                            normal: {
                                color: "#00A0E9",
                                borderColor: "#00A0E9",
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0.8,
                                            color: "#0097e0",
                                        },
                                        {
                                            offset: 0.8,
                                            color: "#021a5d",
                                        },
                                    ],
                                    false
                                ),
                            },
                        },
                    },
                ],
            });
        },
        // 销量排行榜
        // 排序颜色
        attackSourcesDataFmt(sData) {
            let attackSourcesColor = [
                new echarts.graphic.LinearGradient(0, 1, 1, 1, [
                    { offset: 0, color: "#FF9E17" },
                    { offset: 1, color: "#D04597" },
                ]),
                new echarts.graphic.LinearGradient(0, 1, 1, 1, [
                    { offset: 0, color: "#FFE4C6" },
                    { offset: 1, color: "#FB9623" },
                ]),
                new echarts.graphic.LinearGradient(0, 1, 1, 1, [
                    { offset: 0, color: "#F5BBFE" },
                    { offset: 1, color: "#C751D8" },
                ]),
                new echarts.graphic.LinearGradient(0, 1, 1, 1, [
                    { offset: 0, color: "#50FCFC" },
                    { offset: 1, color: "#3859FF" },
                ]),
            ];
            let sss = [];
            sData.forEach(function (item, i) {
                let itemStyle = {
                    color:
                        i < sData.length - 3
                            ? attackSourcesColor[3]
                            : i == sData.length - 3
                            ? attackSourcesColor[2]
                            : i == sData.length - 2
                            ? attackSourcesColor[1]
                            : attackSourcesColor[0],
                };
                sss.push({
                    value: item,
                    itemStyle: itemStyle,
                });
            });
            return sss;
        },
        // 销量排行榜
        salesRanking(arr, arr1) {
            // 基于准备好的dom，初始化echarts实例
            this.salesRankingChart = echarts.init(
                document.getElementById("salesRanking")
            );
            // 绘制图表
            this.salesRankingChart.setOption({
                grid: {
                    top: "0%",
                    left: "22%",
                    bottom: "10%",
                    right: "5%",
                },
                xAxis: {
                    type: "value",
                    splitLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,0.2)",
                            type: "dashed",
                        },
                    },
                    axisTick: {
                        show: false,
                    },

                    axisLabel: {
                        //  改变x轴字体颜色和大小
                        textStyle: {
                            color: "rgba(250,250,250,0.6)",
                            fontSize: 12,
                        },
                    },
                },
                yAxis: {
                    type: "category",
                    data: arr,
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        //  改变y轴颜色
                        lineStyle: {
                            color: "#2c4054",
                        },
                    },
                    axisLabel: {
                        //  改变y轴字体颜色和大小
                        //formatter: '{value} m³ ', //  给y轴添加单位
                        textStyle: {
                            color: "rgba(250,250,250,0.6)",
                            fontSize: 14,
                        },
                    },
                },
                series: [
                    {
                        type: "bar",
                        name: "产出",
                        barWidth: 16,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true, //开启显示
                                    position: "insideRight", //在上方显示
                                    textStyle: {
                                        //数值样式
                                        color: "#FFFFFF",
                                        fontSize: 12,
                                        fontWeight: 500,
                                    },
                                },
                                color: new echarts.graphic.LinearGradient(
                                    1,
                                    0,
                                    0,
                                    0,
                                    [
                                        {
                                            offset: 1,
                                            color: "rgba(24,144,255,1)",
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(24,144,255,0)",
                                        },
                                    ]
                                ),
                                barBorderRadius: [0, 20, 20, 0],
                            },
                        },
                        data: this.attackSourcesDataFmt(arr1),
                    },
                ],
            });
        },
        // 数据屏监控
        checkOpen(item) {
            this.mapList.forEach((item) => {
                item.show = false;
            });
            item.show = true;
        },
        rollImg() {
            /* 获取当前页面的缩放比 若未设置zoom缩放比，则为默认100%，即1，原图大小 */
            var zoom = parseInt(this.$refs.map.style.zoom) || 100;
            /* event.wheelDelta 获取滚轮滚动值并将滚动值叠加给缩放比zoom wheelDelta统一为±120，其中正数表示为向上滚动，负数表示向下滚动 */
            zoom += event.wheelDelta / 12;
            /* 最小范围 和 最大范围 的图片缩放尺度 */
            if (zoom >= 30 && zoom < 500) {
                this.$refs.map.style.zoom = zoom + "%";
            }
            return false;
        },
        move(e) {
            e.preventDefault();
            // 获取元素
            var left = document.querySelector(".boxs");
            var img = document.querySelector(".maps");
            var x = e.pageX - img.offsetLeft;
            var y = e.pageY - img.offsetTop;
            // 添加鼠标移动事件
            left.addEventListener("mousemove", move);
            function move(e) {
                img.style.left = e.pageX - x + "px";
                img.style.top = e.pageY - y + "px";
            }
            // 添加鼠标抬起事件，鼠标抬起，将事件移除
            img.addEventListener("mouseup", function () {
                left.removeEventListener("mousemove", move);
            });
            // 鼠标离开父级元素，把事件移除
            left.addEventListener("mouseout", function () {
                left.removeEventListener("mousemove", move);
            });
        },
        // 预警切换
        tabCheck(i) {
            if (i == 1) {
                this.activeWarning = true;
            } else {
                this.activeWarning = false;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.allScenicSpot {
    width: 100%;
    padding: 0.9375rem 1.5625rem;
    box-sizing: border-box;
    // font-size: 2rem;
    // color: #fff;
    display: flex;
    justify-content: space-between;
    .left,
    .right {
        width: 24%;
    }
    .left {
        .scenicSpots {
            width: 100%;
            height: 15rem;
            background: url("../assets/images/bg_k.png") no-repeat;
            background-size: 100% 100%;
            background-position-x: center;
            padding: 0.5rem 0.875rem;
            box-sizing: border-box;
            position: relative;
            img {
                width: 0.8125rem;
                height: 0.6875rem;
                object-fit: contain;
                position: absolute;
            }
            .img1 {
                top: 0;
                left: 0;
            }
            .img2 {
                top: 0;
                right: 0;
            }
            .img3 {
                bottom: 0;
                left: 0;
            }
            .img4 {
                bottom: 0;
                right: 0;
            }
            .title {
                width: 100%;
                height: 2.6875rem;
                img {
                    width: 6.4375rem;
                    height: 2.6875rem;
                    object-fit: contain;
                }
            }
            .scenicSpots_main {
                width: 100%;
                display: flex;
                justify-content: space-between;
                #general {
                    width: 60%;
                    height: 10rem;
                }
                table {
                    width: 10rem;
                    margin-left: 0.625rem;
                    font-size: 0.875rem;
                    font-family: "SimHei";
                    font-weight: 400;
                    color: #d5fdfd;
                    border-right: 1px solid #1f63a3;
                    border-bottom: 1px solid #1f63a3;
                    box-sizing: border-box;
                    td {
                        width: 5rem;
                        height: 2rem;
                        text-align: center;
                        line-height: 2rem;
                        border-left: 1px solid #1f63a3;
                        border-top: 1px solid #1f63a3;
                        box-sizing: border-box;
                    }
                }
            }
        }
        .ticketSelling {
            height: 23.875rem;
            margin-top: 0.625rem;
            .title {
                width: 100%;
                height: 2.6875rem;
                img {
                    width: 10.5625rem;
                    height: 2.6875rem;
                    object-fit: contain;
                }
            }
            #ticketSelling {
                width: 100%;
                height: 20rem;
            }
        }
        .safetyPatrol {
            height: 20.8125rem;
            margin-top: 0.625rem;
            .title {
                width: 100%;
                height: 2.6875rem;
                img {
                    width: 8.5rem;
                    height: 2.6875rem;
                    object-fit: contain;
                }
            }
            #safetyPatrol {
                width: 100%;
                height: 16rem;
            }
        }
    }
    .right {
        .parkingLot {
            width: 100%;
            height: 15.375rem;
            background: url("../assets/images/bg_k.png") no-repeat;
            background-size: 100% 100%;
            background-position-x: center;
            padding: 0.5rem 0.875rem;
            box-sizing: border-box;
            position: relative;
            img {
                width: 0.8125rem;
                height: 0.6875rem;
                object-fit: contain;
                position: absolute;
            }
            .img1 {
                top: 0;
                left: 0;
            }
            .img2 {
                top: 0;
                right: 0;
            }
            .img3 {
                bottom: 0;
                left: 0;
            }
            .img4 {
                bottom: 0;
                right: 0;
            }
            #parkingLot {
                width: 100%;
                height: 100%;
            }
        }
        .usageTrend {
            width: 100%;
            height: 15.875rem;
            margin-top: 0.75rem;
            #usageTrend {
                width: 100%;
                height: 100%;
            }
        }
        .salesRanking {
            width: 100%;
            height: 27.5rem;
            background: url("../assets/images/icon_right_bg.png") no-repeat;
            background-size: 100% 100%;
            background-position-x: center;
            margin-top: 0.75rem;
            .title {
                width: 100%;
                height: 2.6875rem;
                img {
                    width: 7.5rem;
                    height: 2.6875rem;
                    object-fit: contain;
                }
            }
            #salesRanking {
                width: 100%;
                height: 23rem;
            }
        }
    }
    .main {
        width: 50%;
        .main_box {
            width: 100%;
            height: 44.1875rem;
            background: url("../assets/images/ic_dp_bg.png") no-repeat;
            background-size: 100% 100%;
            background-position-x: center;
            padding: 2rem 0.3125rem 0.3125rem 0.3125rem;
            box-sizing: border-box;
        }
        .boxs {
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: relative;
            .maps {
                position: absolute;
                width: 587.5rem;
                height: 317.81rem;
                top: -240.25rem;
                left: -102rem;
                > img {
                    width: 100%;
                    height: 100%;
                    cursor: move;
                }
                .pops {
                    width: 8.25rem;
                    height: 5.625rem;
                    position: absolute;
                    top: -5.4rem;
                    left: 50%;
                    z-index: 10000;
                    transform: translateX(-50%);
                    background: url(../assets/images/popAlert.png) no-repeat;
                    background-size: 100% 100%;
                    box-sizing: border-box;
                    padding: 0.81rem;
                    > div:nth-of-type(1) {
                        font-size: 0.87rem;
                        color: #ffffffff;
                        margin-bottom: 0.62rem;
                    }
                    > div:nth-of-type(2) {
                        font-size: 0.75rem;
                        color: #ffffffff;
                        margin-bottom: 0.62rem;
                    }
                    > div:nth-of-type(3) {
                        font-size: 0.75rem;
                        color: #ffffffff;
                    }
                }
                .equipment {
                    position: absolute;
                    cursor: pointer;
                    // z-index: 400;
                    > img {
                        width: 1.93rem;
                        height: 2.37rem;
                    }
                    > span {
                        position: absolute;
                        font-size: 0.93rem;
                        color: white;
                        top: -1.5rem;
                        left: 50%;
                        transform: translateX(-50%);
                        white-space: nowrap;
                    }
                    .pops{
                        height: 5rem;
                    }
                }
                .spot {
                    position: absolute;
                    cursor: pointer;
                    // top:253rem;
                    // left:119rem;
                    z-index: 400;
                    > span {
                        position: absolute;
                        font-size: 0.93rem;
                        color: #bb9683ff;
                        top: -1.5rem;
                        left: 50%;
                        transform: translateX(-50%);
                        white-space: nowrap;
                    }
                    > img {
                        width: 2.5rem;
                        height: 2.5rem;
                    }
                }
                .grad2{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 2.5rem;
                    height:2.5rem;
                }
                .inner{
                    width: 0.5rem;
                    height: 0.5rem;
                    border-radius: 0.31rem;
                    background-color: #00D3E9;
                    animation: moveInner 1s infinite;
                }
                .middle{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 1.5rem;
                    height: 1.5rem;
                    border-radius: 0.75rem;
                    background-color: rgba(0, 211, 233, 0.2);
                    animation: moveMiddle 1s infinite;
                }
                .biggest{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 1.25rem;
                    background-color: rgba(0, 211, 233, 0.1);
                    animation: moveBiggest 1s infinite;
                }
                @keyframes moveInner{
                    from {
                        width: 0.25rem;
                        height: 0.25rem;
                    }
                    to {
                        width: 0.5rem;
                        height: 0.5rem;
                    }
                }
                @keyframes moveMiddle{
                    from {
                        width: 0.5rem;
                        height: 0.5rem;
                    }
                    to {
                        width: 1.5rem;
                        height: 1.5rem;
                    }
                }

                @keyframes moveBiggest {
                    from {
                        width: 0.5rem;
                        height: 0.5rem;
                    }
                    to {
                        width: 2.5rem;
                        height: 2.5rem;
                    }
                }
            }
            .infoTotal {
                position: absolute;
                top: 2.5rem;
                left: 3.3125rem;
                .tit {
                    margin-bottom: 1.37rem;
                    font-size: 0.875rem;
                    font-family: "Source Han Sans CN";
                    font-weight: 500;
                    color: #aacdda;
                }
                .total {
                    margin-bottom: 1.37rem;
                    font-size: 2.375rem;
                    font-family: "DINOT";
                    font-weight: 500;
                    color: #06f0b8;
                }
                .outher {
                    display: flex;
                    align-items: center;
                    > div {
                        margin-right: 2rem;
                        > div:nth-of-type(1) {
                            margin-bottom: 0.81rem;
                            font-size: 0.75rem;
                            font-family: "Source Han Sans CN";
                            font-weight: 500;
                            color: #aacdda;
                        }
                        > div:nth-of-type(2) {
                            display: flex;
                            align-items: center;
                            > img {
                                width: 0.87rem;
                                height: 0.68rem;
                            }
                            > span {
                                margin-left: 0.31rem;
                                font-size: 0.75rem;
                                font-family: "Source Han Sans CN";
                                font-weight: 500;
                                color: #06f0b8;
                            }
                        }
                    }
                    > div:nth-of-type(2) {
                        > div:nth-of-type(2) {
                            > span {
                                color: #aacddaff;
                            }
                            > img {
                                transform: rotate(180deg);
                            }
                        }
                    }
                }
            }
        }
        .earlyWarning {
            width: 100%;
            height: 15.125rem;
            margin-top: 0.75rem;
            background: url("../assets/images/bg_k.png") no-repeat;
            background-size: 100% 100%;
            background-position-x: center;
            padding: 0rem 0.875rem 0.5rem;
            box-sizing: border-box;
            position: relative;
            img {
                width: 0.8125rem;
                height: 0.6875rem;
                object-fit: contain;
                position: absolute;
            }
            .img1 {
                top: 0;
                left: 0;
            }
            .img2 {
                top: 0;
                right: 0;
            }
            .img3 {
                bottom: 0;
                left: 0;
            }
            .img4 {
                bottom: 0;
                right: 0;
            }
            .title {
                width: 100%;
                height: 1.875rem;
                display: flex;
                align-items: center;
                .left {
                    width: 7rem;
                    height: 1.875rem;
                    margin-right: 0.625rem;
                    position: relative;
                    img {
                        width: 7rem;
                        height: 1.875rem;
                        object-fit: contain;
                    }
                    div {
                        width: 7rem;
                        height: 1.875rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 0.875rem;
                        font-family: "SimHei";
                        font-weight: 400;
                        color: #d5fdfd;
                        cursor: pointer;
                        position: absolute;
                        left: 0;
                        top: 0;
                        z-index: 1;
                    }
                }
                .right {
                    width: 5rem;
                    height: 1.875rem;
                    position: relative;
                    img {
                        width: 5rem;
                        height: 1.875rem;
                        object-fit: contain;
                    }
                    div {
                        width: 5rem;
                        height: 1.875rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 0.875rem;
                        font-family: "SimHei";
                        font-weight: 400;
                        color: #d5fdfd;
                        cursor: pointer;
                        position: absolute;
                        left: 0;
                        top: 0;
                        z-index: 1;
                    }
                }
                .activeWarning {
                    div {
                        color: #06f0b8;
                    }
                }
            }
            .warningMain {
                width: 100%;
                height: 12rem;
                margin-top: 0.625rem;
                overflow: hidden;
                .ul-scoll {
                    li {
                        width: 100%;
                        height: 2.8125rem;
                        padding: 0.9375rem 1.5rem;
                        box-sizing: border-box;
                        font-size: 0.875rem;
                        font-family: "SimHei";
                        font-weight: 400;
                        color: #caf2f5;
                        margin: 1rem 0 0 0;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        background: #0f3270;
                    }
                }
            }
        }
    }
}
</style>