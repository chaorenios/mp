// pages/store/detail.js
// 
var source = { 
  "zhongxinyinhang": { "sponsor": "中信银行", "fullName": "", "product": "银行理财", "creditDes": "会员存款600万免费一场外阜高球活动", "address": "", "tel": "", "companyDes": "", "productDes": ""}, 
  "taikangrenshou": { "sponsor": "泰康保险", "fullName": "", "product": "泰康保险", "creditDes": "", "address": "", "tel": "", "companyDes": "", "productDes": "" },
  "toto": {
    "sponsor": "TOTO", "fullName": "北京正基鑫远商贸有限公司", "product": "全系列商品", "creditDes": "每消费1万元积500积分", "address": "东五环红星美凯龙：北京市朝阳区朝阳路高井村甲8号；\n北沙滩红星美凯龙：北京市朝阳区北沙滩1号；\n西四环岳各庄红星美凯龙：北京市丰台区西四环路中路113号；", "tel": "东五环红星美凯龙：谢丽丽 15210437587\n北沙滩红星美凯龙：林蔡 18201008508\n西四环岳各庄红星美凯龙：吴彩丽 13811620962", "companyDes": "东陶（中国）有限公司是一个生产、销售民用及商业设施用卫浴、洁具及相关设备的厂家，“被中国陶瓷卫浴品牌网评选为2013年中国卫浴十大品牌”。追求高品质、高工艺水平，使用户享受卫生、健康、舒适的生活是公司一贯追求的目标。\n东陶公司致力于保护珍贵的水资源，创造和保持舒适的生活环境，发展一体化组合结构的卫生设备产品，不断的增强自身产品实力，开拓着新的市场空间。\n东陶公司应用“水与电子相结合”的工艺技术以及其它相关技术，创造出首屈一指的东陶产品。使TOTO的产品以其卓越的功能和极高的可靠性而著称于世。并且东陶“水与电子相结合”为基础的产品系列在同业界被公认为第一产家。", "productDes": "无论是尖端技术实力体现的诺锐斯特·间，还是带来水洗健康体验的卫洗丽。无论是带动行业节水风潮的4.8升节水坐便器，还是水力发电龙头、海洁特瓷砖。无论是智洁技术、超漩式冲洗，还是SMA恒温、EcoMAX技术，TOTO的产品和技术给用户带去智能卫浴体验的同时，更将环保与节能融入到生活之中，并获得了节水贡献奖、环保贡献奖等众多奖项。" },
  "youzhuozhuangshi": { "sponsor": "有卓装饰", "fullName": "有卓（北京）装饰有限公司", "product": "装修", "creditDes": "每消费1万元积400积分", "address": "北京市东城区东直门外小街甲2号，正东国际大厦B座北门9层", "tel": "李锋 13801031631", "companyDes": "", "productDes": "" },
  "ronghuaweilai": {
    "sponsor": "荣华科技", "fullName": "北京荣华未来科技有限公司", "product": "科技软件类", "creditDes": "每消费1万元积500积分", "address": "北京市朝阳区高碑店文化园区1700号C3青年文化创意园A座206", "tel": "王权	010-67710015-0", "companyDes": "北京荣华未来科技有限公司成立于2014年，是一家集软件开发、咨询、销售于一体的高新科技企业，公司以向客户提供优质高效的软件产品、技术支持、咨询服务为宗旨，坚持走技术实力的发展路线，和众多国内外厂商保持着良好的合作关系。拥有APPLE用户售后调查大数据分析系统、APPLE客户数据云服务管理中心、TOTO移动销售终端等多种自主产权的应用软件。", "productDes": "APPLE“一入手，就上手”用户售后调查分析系统\nAPPLE客户数据云服务管理中心\nTOTO移动销售终端" },
  "jiuguanjia": { "sponsor": "酒管家", "fullName": "广州市酒管家酒业有限公司", "product": "酒类产品", "creditDes": "每消费1万元积800积分", "address": "", "tel": "郑冉	18510143733", "companyDes": "做有源头有保障的放心酒", "productDes": "CASA系列红酒" },
  "leishen": { "sponsor": "岭筹用品", "fullName": "北京岭筹科技有限责任公司", "product": "高尔夫用品", "creditDes": "每消费1万元积300积分", "address": "北京市朝阳区东四环中路39号华业国际B217", "tel": "陈可	13911075008", "companyDes": "", "productDes": "" },
  "shiguan": { "sponsor": "功能涂料", "fullName": "北京华奥惠科科技有限公司", "product": "涂料", "creditDes": "每消费1万元积800积分（现场7折优惠）", "address": "", "tel": "郝京喆	13701172209", "companyDes": "", "productDes": "" },
  "comap": {
    "sponsor": "净水系统", "fullName": "北京融合智达国际贸易有限公司", "product": "法国COMAP净水系统（科马普）", "creditDes": "每消费1万元积700积分（现场9折优惠）", "address": "北京市丰台区成寿寺路308号DXD设计互联中心D-138", "tel": "梁先生	13901320776", "companyDes": "北京融合智达国际贸易有限公司成立于2014 年，其前身是软装定制设计工作室。", "productDes": "主营进口高端家居产品，范围涉及卫浴，灯具，家居饰品，地毯以及定制类产品，主营品牌有:\n法国一流的净水品牌-- - COMAP（科马普）\n西班牙卫浴五金品牌---CLEVER\n意大利灯具品牌---FLOS / FOSCARINI / ARTEMIDE / ITLAMP ...\n家居饰品-- - Diesel / ibride / Seletti\n客户涉及开发商，商业客户，私人客户等。" },
  "taiqing": { "sponsor": "太清元气保健贴", "fullName": "商丘市美联生物科技有限公司", "product": "太清元气保健贴", "creditDes": "每消费1000元积35积分（现场85折优惠）", "address": "德众联盟代售", "tel": "李燕文	18901286240", "companyDes": "", "productDes": "" },
  "koufuju": { "sponsor": "口福居", "fullName": "北京口福居火锅城有限公司", "product": "餐饮-火锅", "creditDes": "每盒1500，现场减900，积105积分", "address": "口福居", "tel": "", "companyDes": "", "productDes": "" },
  "zxyh": { "sponsor": "", "fullName": "", "product": "", "creditDes": "", "address": "", "tel": "", "companyDes": "", "productDes": "" }};
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var storeId = options.store
    var path = "../../images/" + storeId + ".png"
    var s = source[storeId]
    this.setData({
      imagePath: path,
      sponsor: s.sponsor,
      fullName: s.fullName,
      product: s.product,
      creditDes: s.creditDes,
      address: s.address,
      tel: s.tel,
      companyDes: s.companyDes,
      productDes: s.productDes
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