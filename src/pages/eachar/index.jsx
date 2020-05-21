import React from 'react';
import echarts from 'echarts';
import './style.less';

export default class index extends React.Component {
  componentDidMount() {
    var myChart1 = echarts.init(document.getElementById('eachars1'));
    let option1= {
      title: {
        text: 'Line Chart'
    },
    xAxis: {
        type: 'category',
        data: ['2013', '2014', '2015', '2016', '2017', '2018']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [10, 19, 3, 5, 2, 3],
        type: 'line',
        smooth: true
    }]
    };
    myChart1.setOption(option1);
    var myChart2 = echarts.init(document.getElementById('eachars2'));
				var option2 = {
          title: {
            text: 'Bar Chart'
        },
				     color: ['#3398DB'],
				     tooltip: {
				         trigger: 'axis',
				         axisPointer: {            // 坐标轴指示器，坐标轴触发有效
				             type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				         }
				     },
				     grid: {
				         left: '1%',
				         right: '2%',
				         bottom: '3%',
				         containLabel: true
				     },
				     xAxis: [
				         {
				             type: 'category',
										 data: ['2013', '2014', '2015', '2016', '2017', '2018'],
				             axisTick: {
				                 alignWithLabel: true
				             }
				         }
				     ],
				     yAxis: [
				         {
				             type: 'value'
				         }
				     ],
				     series: [
				         {
				             name: '直接访问',
				             type: 'bar',
				             barWidth: '60%',
				             data: [10, 19, 3, 5, 2, 3]
				         }
				     ]
				 };
    myChart2.setOption(option2);
    var myChart3 = echarts.init(document.getElementById('eachars3'));
					var option3 = {
            title: {
              text: 'Area Chart'
          },
						xAxis: {
							type: 'category',
							data: ['2013', '2014', '2015', '2016', '2017', '2018']
						},
						yAxis: {
							type: 'value'
						},
						series: [{
							data: [10, 19, 3, 5, 2, 3],
							type: 'line',
							smooth: true
						}]
					};
    myChart3.setOption(option3);
    var myChart4 = echarts.init(document.getElementById('eachars4'));
					  var option4 = {
              title: {
                text: 'Doughunt Chart'
            },
					      tooltip: {
					             trigger: 'item',
					             formatter: '{a} <br/>{b}: {c} ({d}%)'
					         },
					         legend: {
					             orient: 'vertical',
					             left: 10,
					             data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
					         },
					         series: [
					             {
					                 name: '访问来源',
					                 type: 'pie',
					                 radius: ['50%', '70%'],
					                 avoidLabelOverlap: false,
					                 label: {
					                     normal: {
					                         show: false,
					                         position: 'center'
					                     },
					                     emphasis: {
					                         show: true,
					                         textStyle: {
					                             fontSize: '30',
					                             fontWeight: 'bold'
					                         }
					                     }
					                 },
					                 labelLine: {
					                     normal: {
					                         show: false
					                     }
					                 },
					                 data: [
					                     {value: 335, name: ''},
					                     {value: 310, name: ''},
					                     {value: 234, name: ''},
					                     {value: 135, name: ''},
					                     {value: 1548, name: ''}
					                 ]
					             }
					         ]
					  };
		myChart4.setOption(option4);
}

  render() {
    return (
      <div id='eachars'>
        <div id="eachars1" style={{width:'48%',height:500}}></div>
        <div id="eachars2" style={{width:'48%',height:500}}></div>
        <div id="eachars3" style={{width:'48%',height:500}}></div>    
        <div id="eachars4" style={{width:'48%',height:500}}></div> 
    </div>
    );
  }
}


