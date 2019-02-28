/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


////////////////////////////////////////////////
var g_clientBrowerType = '';



var g_gameInterface = new gameinterface();

function gameinterface(){
    if( (typeof(yzJSWindowObject) !== 'undefined') || (typeof(qt) !== 'undefined') ){
        g_clientBrowerType = 'pc';
        $.getScript("/assest/js/gameI_pc.js");
    }
    else if(typeof(yzGameInterface) !== 'undefined'){
        g_clientBrowerType = 'android';
        $.getScript("/assest/js/gameI_android.js");
    }
    else if(typeof(olFishGameInterface) !== 'undefined'){
        g_clientBrowerType = 'android';
        $.getScript("/assest/js/gameI_android.js");
    }
    else if( /(Android)/i.test(navigator.userAgent)){
        g_clientBrowerType = 'android';
        $.getScript("/assest/js/gameI_android.js");
    }
    else if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
        g_clientBrowerType = 'ios';
        $.getScript("/assest/js/gameI_ios.js");
    }else{
        g_clientBrowerType = 'ext';
        $.getScript("/assest/js/gameI_ext.js");
    }
}

function getClientBrowerType(){
    return g_clientBrowerType;
}


function gameInterface_template(){
    
    /** 更新玩家金币/点券信息
     * 
     * @returns {undefined}
     */
    this.UpdateMoney = function(){
        console.log('UpdateMoney');
    };
    
    /** 设置头像信息
     * 
     * @param {int} sex
     * @param {int} logoid 头像ID
     * @param {string} nick 玩家昵称
     * @returns {undefined}
     */
    this.SetHeaderInfo = function(sex, logoid, nick){
        console.log('SetHeaderInfo');
    };
    
    /** 设置注册信息
     * 
     * @param {string} 登陆名
     * @param {string} 密码
     * @returns {undefined}
     */
    this.SetRegisterInfo = function( username, pass){
        console.log('SetRegisterInfo',username,paspass);
    };


    /** 自动登陆ZServer
     * 
     * @param {string} 登陆名
     * @param {string} 密码
     * @returns {undefined}
     */
    this.AutoLoginZServer = function(username,pass){
        console.log('AutoLoginZServer:',username,pass);
    };

    
    /** 签到成功
     * 
     * @returns {undefined}
     */
    this.OnSignSucess = function(){
        console.log('OnSignSucess');
    };
    
    /** 设置喇叭数量
     * 
     * @param {type} labaNum  喇叭数量
     * @returns {undefined}
     */
    this.SetLabaNum = function( labaNum){
        console.log('SetLabaNum');
    };
    
    /** 进入房间 
     * 
     * @param {int} roomID 房间ID
     * @param {int} nameID 游戏ID
     * @returns {undefined}
     */
    this.EnterGame = function( roomID,nameID ){
        console.log('EnterGame:' + roomID + " - " + nameID);
    };
    
    /** 应用内打开网页
     * @param {string} webaddr 网页地址
     * @returns {undefined}
     */
    this.OpenHallWeb = function( webaddr){
        console.log('OpenHallWeb');
    };
    
    /*** 微信支付接口
     * @param {string} orderID wx订单ID
     * @returns {undefined}
     */
    this.WeiXinPay = function( orderID){
        console.log('WeiXinPay');
    };
    
    /*** 支付宝支付接口
     * @param {string} orderInfo ali支付信息字符串
     * @returns {undefined}
     */
    this.AliPay = function( orderInfo){
        console.log('AliPay');
    };
    
}

