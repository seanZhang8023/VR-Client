/**
 * Strings for the Agent application.
 * Localized for English.
 */
export default {

    // Single word strings.
    Addagent: '添加客服',
    Brand: '在线客服 - 客服',
    Login: '立即登录',
    retrievePassword: '找回密码',
    reLogin: '重新登录',
    No: '否',
    Password: '密码',
    Save: '保存',
    Username: '用户名',
    Yes: '是',
    Send: '发送',
    timeFormat: 'MMMM Do YYYY, h:mm A',

    confirmPassword: '确认密码',
    editProfileLabel: '编辑配置文件',
    firstName: '名',
    lastName: '姓',
    companyName: '佳能相机',
    download: '下载',
    otherHungUp: '对方已挂断！',
    agentNotFound: "数据库中不存在该客服",
    messageTitleNotice: "对方可能已断网或已下线",
    // CustomerPanel component
    CustomerPanel: {
        blankEmail: '邮件地址为空',
        blankPhone: '电话为空',
        requestType: '请求类型',
        customerContext: '客户资料',
        detailsUnavailable: '呼叫详情不可用',
        getNext: '点击聊天请求后开始聊天',
        noContext: '没有提供详细资料',
        clickOnAChatRequestToGetStarted: '点击呼叫请求后开始聊天',
        noCustomerIsWaiting: '欢迎进入多媒体联络中心',
        anonymous: '匿名用户',
        email: '邮箱',
        phone: '电话'
    },

    // CustomerSidebar component
    CustomerSidebar: {
        customersWaiting: '客户正在等待',
        getNext: '下一个',
        getRequestError: '无法获取下一个服务请求',
        noCustomers: '队列中没有客户',
        noFilteredRequests: '改过滤器中没有客户',
        activeCustomers: '回话中的客户',
        voiceChatRequests: '语音请求',
        textChatRequests: '文本请求',
        videoChatRequests: '视频请求',
        wxChatRequests: '微信请求',
        openSessions: '正在会话',
        recentSessions: '最近的会话',
        NO: '没有',
        customerConnect: '联系客户',
        customerName: '客户姓名',
        customerEmail: '客户Email',
        typeOfConnect: '连接类型',
        department: '部门',
        muteCall: '静音',
        cancel: '取消',
        connect: '连接'
    },


    // Customer component
    Customer: {
        callRequested: '呼叫已发起',
        anonymous: '匿名用户',
        min: '分钟',
        PromptWarning: '当前状态为离线状态，请先设置为在线状态！'
    },
    AgentState: {
        onLine: "签入",
        offLine: "签出",
        Prompt: '提示',
        agentStateWarning: "请先关闭所有会话!",
        freeLine: "小休"
    },
    // Agent Sidebar component
    AgentAddressBook: {
        otherAgents: '其他客服'
    },

    // Session Component
    Session: {
        Hello: '您好，很高兴为您服务！',
        end: '结束会话',
        start: '开始会话',
        closeOtherVoiceVideoSessions: '请先关闭其他会话',//you can't start this session until you close other voice/video sessions.
        endWX: '会话已结束'
    },

    // Call Component
    Call: {
        answerCallFailure: '应答失败',
        endCallFailure: '终止会话失败',
        initCallFailure: '初始化会话失败',
        rejectCallFailure: '拒绝会话失败',
        startScreenShareFailure: '屏幕分享失败',
        stopScreenShareFailure: '终止屏幕分享失败',
        screenShareError: '屏幕分享',
        notice: '提示',
        screenShareErrorMessage: '屏幕分享功能只能在谷歌浏览器上装了插件才能使用',
        clickDownload: '点击下载',
        startScreenShare: '开始分享',
        stopScreenShare: '停止分享',
        voiceing: '语音通话中',
        videoing: '视频通话中',
        calling: "正在呼叫",
        cancelVoice: "取消语音",
        cancelVideo: "取消视频",
        calling: "正在呼叫",
        answer: '应答',
        call: '呼叫',
        decline: '拒接来电',
        end: '停止会话',
        hold: '挂起',
        mute: '静音',
        startVideo: '开始视频',
        stopVideo: '停止视频',
        unHold: '取消挂起',
        unMute: '取消静音',
        connecting: '正在连接',
        expandVideo: '展开视频',
        shrinkVideo: '收缩视频',
        audioCall: '语音会话',
        videoCall: '视频会话',
        hangUp: '挂断',
        video_status_hide: '隐藏',
        video_status_standard: '标准',
        video_status_open: '展开',
        video_status_fullScreen: '全屏',
        startDeskShare: '开始共享',
        shareDeskMsg: '共享桌面',
        shareDeskContent: '选择要共享的窗口内容',
        shareAllScreen: '全部屏幕',
        shareWindow: '应用窗口',
        msg: '短信',
        email: '邮件',
        review: '发起评价',
        text: '文本',
        voice: '语音',
        video: '视频',
        phone: '电话',
        linkType: '选择一种联系方式',
        recipient: '发送邮件',
        emailAddress: '邮箱地址',
        theme: '主题',
        bodyInfo: '正文',
        call: '拨打',
        sendMsg: '发送短信',
        editContent: '编辑内容',
        makeCall: '打电话',
        weixin: '微信',
        pstn: '电话',
        sendRateSuccessMsg: '发送评价成功',
        sendRatedWarningMsg: '邀请评价已发送',
        sessionLoading: '正在进行电话服务',
        sendRatedWarningMsg_noAction: '请先开始会话',
    },

    // Chat Component
    Chat: {
        placeholder: '点击发送消息',
        noAgentsOnLine: '没有客服在线',
        enterYourMessageHere: '请在此处输入文本信息',
        angetsAreOffline: '客服不在线',
        returnStr: '返回',
        isTheFirstItem: "已经是第一条记录",
        isTheLastItem: "已经是最后一条记录",
        youCannotSendMessageToYourself: "您不能给自己发消息"
    },

    // Chat Message Component
    ChatMessage: {
        media: '媒体'
    },

    // Notice messages.
    Notices: {
        // Login container.
        invalidCredentials: '证书无效',
        wait: '请稍等...',

        // EditProfile container.
        updateAgtDetailsError: '无法更新客服资料',
        updatedAgtDetails: '客服资料已更新',
        updatingAgtDetails: '更新中...',

        // Admin Container
        createdAgent: '客服已在管理员处创建，请不要在此编辑任何资料',
        creatingAgent: '正在创建客服，请稍等...',
        userCreateError: '无法创建客服',

        // Session Component
        endCall: '请在终止会话前先将呼叫结束',

        // Dashboard container
        loggingIn: '登录中...'
    },

    Navigation: {
        addAgent: '添加客服',
        logout: '退出账号',
        profile: '资料'
    },

    Validations: {
        passwordMismatch: '两次输入密码不一致',
        username: '用户名必须输入'
    },

    Entry: {
        rememberMe: '记住密码',
        agentLogin: '客服登录',
        userName: '请输入账号',
        password: '请输入密码',
        resetPassword: '忘记密码'
    },

    App: {
        wrongUrlTryAgain: '输入的地址错误，请检查后重新输入。'
    },

    ScreenCapture: {
        screenCaptureNotExistTitle: '录屏插件未安装',
        screenCaptureNotExistBody: '请到以下地址下载并安装该插件  http://112.124.117.58/plugin/screenRecord.crx',
    },

    Email: {
        invalidEmail: '请输入正确的邮箱格式',
        noChatInSession: '会话中没有未发送的信息',
        emailSending: '邮件发送中...',
        emailSent: '邮件已发送!'
    },

    Profie: {
        department: '部门',
        profile: '简介',
        profilePicture: '头像',
        removePicture: '删除头像',
        uploadNew: '上传新头像',
        showNotifications: '显示通知',
        notificationsSound: '通知声音',
        ProfieTitle: '个人资料',
        isDelete: '确认删除?'
    },

    CannedMessages: {
        cannedMessages: '录制消息',
        newCannedMessage: '录制新消息',
        message: '消息',
        cancel: '取消',
        addMessage: '添加消息',
        isQuit: '确定要退出当前账号？',
        hasCallOn: '当前会话进行中，确认登出？',
        acknowledge: '确认',
        notification:'提示',
        quit:'确定退出'
    },

    RestPassword: {
        resetPasswordForm: '重设密码',
        enterEmailForRestLink: '请输入邮箱',
        send: '发送',
        pleaseEnterAValidEmail: '请输入有效的邮箱地址',
        thisEmailDoesNotExistInTheSystem: '系统中不存在该邮箱',
        pleaseTryAgainOrContactYourSystemAdministrator: '请重试或者联系系统管理员'
    },

    Dashboard: {
        newServiceRequestReceived: '视频查勘请求',
        grabSingleFailure: '抢单失败'
    },

    Date: {
        year: '年',
        month: '月',
        date: '日',
        day: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        hour: '时',
        minute: '分',
        second: '秒',
        am: '上午',
        pm: '下午'
    },
    UserInfo: {
        userName: '姓名',
        level: '等级',
        userPhones: '手机号',
        userEmail: '邮箱',
        userBirthday: '生日',
        sex: '性别',
        userDesc: '客户描述',
        address: '住址',
        companyName: '公司名称',
        inputName: '请输入姓名',
        inputLength: '输入长度不能超多10个汉字',
        inputPhone: '请输入手机号',
        inputEmail: '请输入邮箱',
        createDate: '创建时间',
        checkPhone: '请正确输入手机号！',
        checkEmail: '请正确输入邮箱！',
        saveInfo: '保存资料',
        generalUser: '普通用户',
        male: '男',
        female: '女',
        alreadyPhone: '该手机已被注册',
        alreadyEmail: '该邮箱已被注册',
        YMD: 'YYYY-MM-DD',
        YMDHMS: 'YYYY-MM-DD HH:mm:ss',
        userPhone: '手机可以使用',
        emailUse: '邮箱可以使用',
        userData: '用户资料',
        knowledge: '知识库',
        contactRecord: '接触记录',
        noneInfo: '暂无客户资料',
        saveSuccess: '保存成功',
        saving: '正在保存......',
        createSuccess: '创建成功',
        updateSuccess: '更新成功',
        createFailure: '创建失败',
        updateFailure: '更新失败',
        msgTip: '服务器异常',
        YYYYMMDD: 'YYYY年MM月DD日'
    },

    knowledge: {
        categoryName: '标题名称',
        categoryDesc: '描述',
        inputCategoryName: '请输入分类名称',
        inputCategoryDesc: '请输入分类描述',
        addCategory: '添加分类',
        editCategory: '修改分类',
        sort: '排序',
        sortOnlyNumber: '请填写数字',
        notification: '提示',
        isConfirmDelete: '确认删除？',
        confirmDelete: '确定删除',
        cancel: '取消',
        isSaving: '正在保存...',
        saveSuccess: '保存成功',
        saveFailure: '保存失败',
        sure: '确定',
        upload: '上传',
    },
    SessionOperation: {
        ok: '确认',
        cannel: '取消',
        popconfirmTitle: '确认挂断?'
    },
    transfer: {
        transferPeople: '转接人',
        addMeetingPeople: '添加会议参与人'
    },
    conference: {
        conferenceInvite: '会议邀请',
    },
    agentProfile: {
        fullNameCannotBeEmpty: '名不能为空',
        fullNameTenLengthRange: "名长度限制在10位以内",
        supervisePhoneCannotBeEmpty:'监督电话不能为空',
        lastNameCannotBeEmpty: '姓不能为空',
        lastNameTenLengthRange: "姓长度限制在10位以内",
        phoneCannotBeEmpty: '手机号格式不正确',
        emailCannotBeEmpty: '邮箱格式不正确或邮箱为空',
        portraitCannotBeEmpty: '头像不能为空',
        portraiMustEndWithjpgOrpng: '头像必须是jpg或png格式',
        oldPasswordCannotBeEmpty: '旧密码不能为空',
        newPasswordCannotBeEmpty: '新密码不能为空',
        confirmPasswordCannotBeEmpty: '确认密码不能为空',
        passwordNotSame: '确认密码与新密码不一致',
        setFailure: '设置失败',
        setSuccess: '设置成功',
        updatePwdFailure: '修改密码失败',
        updatePwdSuccess: '修改密码成功',
        personalProfile: '个人资料',
        uploadPortrait: '上传头像',
        delete: '删除',
        portraitFormat: '格式：png、jpg  大小：2M',
        workerID: '工号',
        agentRole: '角色',
        departments: '客服组',
        sources: '渠道',
        fullName:'姓名',
        supervisePhone:'监督电话',
        firstName: '名',
        lastName: '姓',
        cellphone: '手机',
        email: '邮箱',
        notification: '通知',
        showNotification: '显示通知',
        notificationSound: '通知声音',
        updatePwd: '修改密码',
        save: '保存',
        cancel: '取消',
        oldPassword: '旧密码',
        newPassword: '新密码',
        confirmPassword: '确认密码',
        inputPlease: '请输入',
    },
    companySetting: {
        companyNameCannotBeEmpty: '公司名字不能为空',
        websiteCannotBeEmpty: '公司网址不能为空！',
        websiteFormatInvalid: '公司网址格式不正确！',
        loginLogoCannotEmpty: '登入logo不能为空！',
        loginLogoMustEndWithpngOrjpg: '登入logo必须为png、jpg格式',
        loginLogoSizeMustLittleThan2M: '登入logo图片必须小于2M',
        pageHeaderLogoSizeMustLittleThan2M: '页眉logo图片必须小于2M',
        pageHeaderLogoCannotEmpty: '页眉logo不能为空',
        pageHeaderLogoMustEndWithpngOrjpg: '页眉logo必须为png、jpg格式',
        settingSuccess: "设置成功",
        settingFailure: "设置失败",
        setCenter: "设置中心",
        companySet: "企业设置",
        companyName: "企业名称*",
        inputCompanyName: "请输入企业名称",
        companyWebsite: "网站地址*",
        inputCompanyWebsite: "请输入网站地址",
        inputWelcomeExpression: "请输入欢迎语",
        inputTimeoutExpression: "请输入欢迎语",
        pageHeaderLogo: "页眉logo*",
        uploadLogo: "上传logo",
        delete: "删除",
        pictureFormat: "格式：jpg、png",
        pictureSize: "大小：2M 像素：77px*33px",
        loginLogo: "登入logo*",
        pageHeaderSamplePic: "示例图（页眉）",
        loginSamplePic: "示例图（登录页）",
        reset: "重置",
        programIsWrong: "程序出错了",
        save: "保存",
        welcomeExpression: "欢迎语",
        timeoutExpression: "超时语",
        waitTime: "超时时间",
        fiveMin: "5分钟",
        eightMin: '8分钟',
        tenMin: '10分钟',
        twentyMin: '20分钟',
        thirtyMin: '30分钟',
        cannotBeEmpty: '不能为空',
    },
    knItem: {
        collapse: '收起',
        fullContent: '全文',
        push: '推送',
        preview: '预览',
    },
    knowledgeBase: {
        searchResult: '搜索结果',
        knowledgeCategroy: '知识分类',
        inputKeyWord: "请输入关键字",
        search: '搜索',
    },
    buttonSetCenter: {
        setCenter: "设置中心",
        buttonSetCenter: '按钮设置',
        add: '添加',
        edit: '修改',
        cannotBeEmpty: "不能为空",
        webName: "站点名称",
        title: "客服标题",
        background: "背景颜色",
        style_type: "样式选择",
        location: "浏览器标签位置",
        selectPlease: '请选择',
        right: '右',
        left: '左',
        float: '浮动',
        fix: '固定',
        isSaving: '正在保存...',
        save: '保存',
        back: '返回',
        addSuccess: '添加成功',
        addFailure: '添加失败',
        editSuccess: '修改成功',
        editFailure: '修改失败',
        importScript: '引用脚本',
        buttonEvent: '按钮事件',
    },
    wxSet: {
        companyId: '企业编号',
        wxSet: '微信设置',
        publicName: '公众号名称',
        saveSuccess: '保存成功',
        saveFailure: '保存失败',
    },

    Expression: {
        title: '添加常用语',
        fromtitle: '常用语',
        ok: '确定'

    },
    location: {
        af: '前45度',//all front,事故全貌 前45度
        ab: '后45度',//all back,事故全貌 后45度
        lf: '远景（含车牌）',//lose far,损失部分 远景（含车牌）
        ln: '近景',//lose near,损失部分 近景
        icf: '车辆识别码',//id code far 车辆识别码
        icn: '车辆识别码细节',//id code near 车辆识别码细节
        dcm: '驾驶证主页',//driver card master 驾驶证主页
        dcs: '驾驶证副页',//driver card slave 驾驶证副页
        dlm: '行驶证主页',//driving license master 行驶证主页
        dls: '行驶证副页',//driving license slave 行驶证副页
        iCardF: '保险卡',//insurance card far 保险卡
        iCardN: '保险卡细节',//insurance card near 保险卡细节
        bdf: '银行卡主页',//bank card front 银行卡主页
        bdb: '银行卡副页',//bank card back 银行卡副页
        lov: '交通事故认定书',//letter of verification far交通事故认定书
        lovn: '交通事故认定书细节',//letter of verification near 交通事故认定书细节
        idcf: '身份证主页',//ID card front 身份证主页
        idcb: '身份证副页',//ID card back 身份证副页
        part: '局部细节'//其他局部细节，可以上传多张照片
    },
    reportStates: {
        'untreated': '未发起',
        'uncomplete': '未完成',//8
        'unhold': '未接通',//1
        'tbc': '待审核',//2
        'assigned': '已接收',//3
        'returned': '已退回',//4
        'checking' : '定损中',//5
        'offline':  '转线下',//7
        'checked': '已定损',//6
        'canceled':'已注销',//9
        'holdedOn': '已接通',
        'surveied' : '已查勘',

    },
    ReportDetail: {
        tellCustom: '审核完成，提交',
        haveDone: "已完成",
        uploadReport: '提交',
        sendLossReport: '发送定损单'
    },
    onholdCall: {
        'onhold': '保持',
        'unhold': '取消保持'
    },
    userRole: {
        "100": '工作台',
        "200": '客户中心',
        "300": '知识中心',
        "400": '统计中心',
        "500": '设置中心'
    },
    lossAssType: {
        lossAssCar: '标的车',
        threeCar: '三者车'
    },
    accidentResponse: {
        '1': '全责',
        '2': '主责',
        '3': '次责',
        '4': '无责'
    },
    showEvaluationState:{
        '1':'非常不满意',
        '2':'不满意',
        '3':'一般',
        '4':'满意',
        '5':'非常满意'
    },
    ocrSelect:{
        'IDCard':'请选择身份证正面： ',
        'drivingLicence':'请选择驾驶证主页： ',
        'travelLicence':'请选择行驶证主页： ',
        'bankCard':'请选择银行卡主页： ',
    },
    reportType:{
        famliyRisk:'家庭险'
    },
    treatWay:{
        recycle:'保险人统一回收',
        evaluate:'作价折归被保险人'
    }

}
