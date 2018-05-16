// pages/detail/brand_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isTOTO: false,
  },

  call: function () {
    let designerID = wx.getStorageSync("designerID") || ""
    // 验证是否存在设计师ID
    if (designerID == "") {
      wx.navigateTo({
        url: '../login/login',
      })
    } else {
      // 拨打电话
      wx.makePhoneCall({
        phoneNumber: '‭13911079493‬',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var title = options.title
    var imageSrc = "../../images/" + title + ".jpg"
    var detail = ""
    var istotoTemp = false
    if (title == "toto") {
      istotoTemp = true
      imageSrc = "../../images/toto-d1.png"
      detail = ""
    } else if (title == "aopu") {
      detail = [{
        name: 'p',
        attrs: {
          style: 'font-size: 16px;'
        },
        children: [{
          type: 'text',
          text: '1993年第一台浴霸在奥普诞生，由此改变国人千百年来的沐浴方式，25年来，奥普始终专注于温暖与空气事业的奉献，秉承“为爱设计”的品牌理念，致力于更多高品质的产品走进千家万户，营造纯净清新、健康温暖的居室环境。'
        }]
      }]
    } else if (title == "fangtai") {
      detail = [{
        name: 'p',
        attrs: {
          style: 'font-size: 16px;'
        },
        children: [{
          type: 'text',
          text: '方太集团（以下简称“方太”）创建于1996年。二十一年来忠于初心，始终专注于高端嵌入式厨房电器的研发和制造，致力于为追求高品质生活的人们提供优质的产品和服务，打造健康环保有品位有文化的生活方式，让千万家庭享受更加幸福安心的生活，方太始终坚持\'专业, 高端, 负责\'的战略性定位,品牌实力不断提升。'
        }]
      }]
    } else if (title == "gujia") {
      detail = [{
        name: 'p',
        attrs: {
          style: 'font-size: 16px;'
        },
        children: [{
          type: 'text',
          text: '顾家家居，中国家居行业的领军品牌，公司旗下拥有床垫、布艺沙发、休闲沙发、功能沙发、真皮沙发、软床、等产品系列，产品远销世界120多个国家和地区，拥有超过2500家品牌专卖店，为全球千万家庭提供高品质的客厅及卧室家居。'
        }]
      }]
    } else if (title == "jinding") {
      detail = [{
        name: 'p',
        attrs: {
          style: 'font-size: 16px;'
        },
        children: [{
          type: 'text',
          text: '浙江今顶集成吊顶有限公司成立于2006年，公司在集成吊顶产品的研发、设计、生产、营销上始终处于行业领先地位，尤其是在复古集成吊顶方面更是独领风骚。作为创新型科技企业，至今已获国家专利近百项，拥有国内唯一一家复古集成吊顶研发基地，开创了美学装修集成吊顶“复古时代”。'
        }]
      }]
    } else if (title == "jinpai") {
      detail = [{
        name: 'p',
        attrs: {
          style: 'font-size: 16px;'
        },
        children: [{
          type: 'text',
          text: '金牌厨柜，18年专注厨柜，重新定义中国专业厨柜标准，拥有9大专业优势，10年品质保证，连续5年蝉联“中国房地产500强首选厨柜品牌”，中国、美国、迪拜，更多家庭在用金牌厨柜！金牌厨柜，更专业的高端厨柜。'
        }]
      }]
    } else if (title == "langsi") {
      detail = [{
        name: 'p',
        attrs: {
          style: 'font-size: 16px;'
        },
        children: [{
          type: 'text',
          text: '朗斯创建于2002年，是一家集产品研发、生产、营销、服务于一体的中国淋浴房企业,也是一家富有创新精神和勇于探索实践的中国民族企业；是值得信赖、具有公信力与民族责任感的淋浴房行业的佼佼者。'
        }]
      }]
    } else if (title == "makeboluo") {
      detail = [{
        name: 'p',
        attrs: {
          style: 'font-size: 16px;'
        },
        children: [{
          type: 'text',
          text: '“马可波罗”品牌诞生于1996年，作为国内建陶行业最早品牌化的企业之一，以“文化陶瓷”占领市场。目前产品涵盖亚光砖、抛光砖、抛釉砖、内墙瓷片、微晶石、手工雕刻砖等所有品类。将中国传统文化之精髓展现在瓷砖上，引导设计之风回归东方禅韵，受到国内外消费者和专家的广泛关注。'
        }]
      }]
    } else if (title == "ruibao") {
      detail = [{
        name: 'p',
        attrs: {
          style: 'font-size: 16px;'
        },
        children: [{
          type: 'text',
          text: '瑞宝（北京）装饰设计有限公司，集研发制造、销售、设计服务为一体的软装服务提供商。连续七年蝉联壁纸行业十大品牌，为消费者提供在设计上高度符合个人审美情趣，质量上严格遵循国际环保标准的壁纸墙纸、壁画、窗帘产品。'
        }]
      }]
    } else if (title == "shengxiang") {
      detail = [{
        name: 'p',
        attrs: {
          style: 'font-size: 16px;'
        },
        children: [{
          type: 'text',
          text: '圣象集团成立于1995年，总部位于上海。二十多年来，圣象从地板领军者，到家居梦想践行者，始终站在行业的前端；并以前瞻的视野、创新的思维和拼搏的精神，不断超越自我，创造了一个又一个辉煌的成绩，引领和推动行业的整体发展。'
        }]
      }]
    } else if (title == "songbaowangguo") {
      detail = [{
        name: 'p',
        attrs: {
          style: 'font-size: 16px;'
        },
        children: [{
          type: 'text',
          text: '从1988年的一个梦想到实现全球800家专卖店， 松堡王国每一天，都在演绎着创新与变革， 以创新思维，助力发展，服务升级，产品升级， 唯一不变的是“专注青少年儿童生态家居事业一百年不变”。'
        }]
      }]
    } else if (title == "suofeiya") {
      detail = [{
        name: 'p',
        attrs: {
          style: 'font-size: 16px;'
        },
        children: [{
          type: 'text',
          text: '索菲亚全屋定制源自法国，欧式风格，定制衣柜行业领先品牌，目前服务于京津沪筑区域，生产基地更便捷，设计师更快速一对一本地化上门服务，公司有着多年的发展历史 ，已形成一套完整的设计、生产、销售、安装、售后服务为一体化的经营运作模式。'
        }]
      }]
    } else if (title == "tata") {
      detail = [{
        name: 'p',
        attrs: {
          style: 'font-size: 16px;'
        },
        children: [{
          type: 'text',
          text: 'TAATA木门创建于1995年5月是致力于成品居室门开发、研究、生产、销售、服务的专业企业。到目前TATA共拥有及合作的工厂二十余家，拥有先进的现代化厂房及设备，规模庞大的木门专业成产基地。销售网点覆盖全国各大、中型城市，先后荣获国家众多荣誉称号。'
        }]
      }]
    } else if (title == "xilinmen") {
      detail = [{
        name: 'p',
        attrs: {
          style: 'font-size: 16px;'
        },
        children: [{
          type: 'text',
          text: '喜临门-中国家居O2O品牌厂家导购平台，提供美式家具，欧式家具，现代家具，中式家具，儿童家具，美国进口床垫，建材，家纺，家电等商品。全球采购，正品保证，限时送达，售后无忧，万千家庭共同选择！'
        }]
      }]
    } else if (title == "yezhifeng") {
      detail = [{
        name: 'p',
        attrs: {
          style: 'font-size: 16px;'
        },
        children: [{
          type: 'text',
          text: '业之峰装饰北京公司一贯秉持“客户第一”的经营宗旨，以“客户服务满意”为企业的指导方针，以优秀设计师群体为龙头，以先进的现代企业制度为依托，以精湛的施工队伍为基础，以完善的服务体系为保证，对每一位客户提供精心、细致、周到的全面服务。'
        }]
      }]
    } else if (title == "yifengjiaju") {
      detail = [{
        name: 'p',
        attrs: {
          style: 'font-size: 16px;'
        },
        children: [{
          type: 'text',
          text: 'E-FENG意风家具成立于北京1995年，是以生产环保板式家具、全实木家具和软体家具为主的家具制造企业，在北京拥有20多万平米的生产基地，“意风家具”的进口板全部采用环保均达到f★★★★级标准的欧洲原装进口爱格板，国产板全部采用吉林森工露水河E0级板材，引领环保家具行业新风尚。'
        }]
      }]
    } else {
      detail = ""
    }
    this.setData({
      isTOTO: istotoTemp,
      brandImageSrc: imageSrc,
      brandDetailText: detail
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})