/*
 * @Author: mikey.jingjianhai 
 * @Date: 2018-10-26 16:24:05 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-10-26 16:39:07
//  */
// var Myswiper = new Swiper('.sectionCenter', {
//         initialSlide: 1,
//         autoplay: false,
//         on: {
//             slideChange: function() {
//                 var inde = Myswiper.activeIndex;
//             }
//         }
//     })
// var Myswiper = new Swiper('.sectionCenter', {
//     initialSlide: 1,
//     autoplay: false,
//     on: {
//         slideChange: function() {

//         }
//     }
// })
// var Bscoll = new BScroll('.leftslide', {
//     click: true,
//     probeType: 2,
//     scrollBar: true
// })
// var Bscolld = new BScroll('.rightslide', {
//     click: true,
//     probeType: 2,
//     scrollBar: true
// })

// $('.list').on('click', 'li', function() {
//     $(this).addClass('fontd').siblings().removeClass('fontd');
//     var ht = $(this).html();
//     $('.righth1').html(ht);
// })
// $('#footer').on('click', 'dl', function() {
//     $(this).addClass('active').siblings().removeClass('active');
//     var ind = $(this).index();
//     Myswiper.slideTo(ind, 200)

// })

// $.ajax({
//     url: "../data/data.json",
//     success: function(data) {
//         if (data.code === 0) {
//             init(data)
//         } else {
//             console.log('失败')
//         }
//     }
// })

// function init(data) {
//     leftData(data.left)
//     rightData(data.init)
//     clickd(data.right)
// }

// function leftData(data) {
//     html = '';
//     $.each(data, function(i, v) {
//         html += `<li data-id='${v.id}'>${v.text}</li>`
//     })
//     $('#list').append(html);
//     $('#list').find('li').eq(0).addClass('fontd')
// }

// function rightData(data) {
//     add = '';
//     $.each(data, function(i, v) {
//         add += `
//                  <dl>
//                     <dd><img src="${v.img}" alt=""></dd>
//                  <dt>${v.txt}</dt>
//             </dl>
//             `;
//     })

//     $('#rightslide_next').html(add)
// }

// function clickd(data) {
//     $('#list').on('click', 'li', function() {
//         var indexleft = $(this).index();
//         console.log(indexleft)
//         if (indexleft > 10) {
//             var indexleft = (indexleft % 10) - 1;

//         }
//         var Datad = filt(data, "id", indexleft)
//         rightData(Datad)
//     })
// }

// function filt(data, key, val) {
//     return data.filter(function(item) {
//         return item[key] === val;
//     })
// }