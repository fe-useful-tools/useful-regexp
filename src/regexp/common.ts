/** 邮箱 */
export const EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/** 正整数 */
export const POSITIVE_INTEGER = /^\d+$/;

/** 负整数 */
export const NEGTIVE_INTEGER = /^-{1}\d+$/;

/** 整数 */
export const INTEGER = /^[-]?\d+$/;

/** 正浮点数 */
export const POSITIVE_DECIMAL = /^\d+\.\d+$/;

/** 负浮点数 */
export const NEGTIVE_DECIMAL = /^-{1}\d+\.\d+$/;

/** 浮点数 */
export const DECIMAL = /^[-]?\d+\.\d+$/;

/** 正整数或正浮点数 */
export const POSITIVE_INTEGER_OR_DECIMAL = /^\d+([.]{1}\d+)?$/;

/** 负整数或负浮点数 */
export const NEGTIVE_INTEGER_OR_DECIMAL = /^-{1}\d+([.]{1}\d+)?$/;

/** 整数或浮点数 */
export const INTEGER_OR_DECIMAL = /^[-]?\d+([.]{1}\d+)?$/;

/** 火车车次 */
export const TRAIN_TRIPS = /^[GCDZTSPKXLY1-9]\d{1,4}$/;

/** 国际移动设备身份码(International Mobile Equipment Identity) */
export const PHONE_CODE_IMEI = /^\d{15,17}$/;

/** 必须带端口号的网址(或ip) */
export const WEBSITE_URL_WITH_PORT = /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/;

// /^(https?:\/\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?$/

/** 网址(支持端口和"?+参数"和"#+参数) */
export const WEBSITE_URL = /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;

/** 统一社会信用代码 */
export const UNIFIED_SOCIAL_CREDIT_CODE = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/;

/** 迅雷链接 */
export const THUNDER_LINK = /^thunderx?:\/\/[a-zA-Z\d]+=$/;

/** ed2k链接(宽松匹配) */
export const ED2K_LINK = /^ed2k:\/\/\|file\|.+\|\/$/;

/** 磁力链接(宽松匹配) */
export const MAGNET_LINK = /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/;

/** 子网掩码 */
export const SUBNET_MASK = /^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/;

/** linux"隐藏文件"路径 */
export const HIDDEN_FILE_PATH_LINUX = /^\/(?:[^/]+\/)*\.[^/]*/;

/** linux"文件(夹)"路径 */
export const FILE_FOLDER_PATH_LINUX = /^\/(?:[^/]+\/)*$/;

/** linux"文件"路径 */
export const FILE_PATH_LINUX = /^\/(?:[^/]+\/)*[^/]+$/;

/** window"文件夹"路径 */
export const FILE_FOLDER_PATH_WINDOWS = /^[a-zA-Z]:\\(?:\w+\\?)*$/;

/** window下"文件"路径 */
export const FILE_PATH_WINDOWS = /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/;

/** 股票代码(A股) */
export const A_SHARE_STOCK_CODE = /^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/;

/** 大于等于0, 小于等于150, 支持小数位出现5, 如145.5, 用于判断考卷分数 */
export const SCORE_OF_EXAMINATION_PAPER = /^150$|^(?:\d|[1-9]\d|1[0-4]\d)(?:.5)?$/;

/** html注释 */
export const HTML_COMMENTS = /^<!--[\s\S]*?-->$/;

/** html标签(宽松匹配) */
export const HTML_TAG = /^<(\w+)[^>]*>(.*?<\/\1>)?$/;

/** md5格式(32位) */
export const MD5_FORMAT = /^([a-f\d]{32}|[A-F\d]{32})$/;

/** 版本号格式必须为 X.Y.Z */
export const VERSION_NUMBER = /^\d+(?:\.\d+){2}$/;

/** 视频链接地址（视频格式可按需增删） */
export const VIDEO_LINK = /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i;

/** 图片链接地址（图片格式可按需增删） */
export const IMAGE_LINK = /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i;

/** 24小时制时间（HH:mm:ss） */
export const TIME_24_HOUR = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;

/** 12小时制时间（hh:mm:ss） */
export const TIME_12_HOUR = /^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/;

/** base64格式 */
export const BASE64 = /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i;

/** 数字/货币金额（支持负数、千分位分隔符） */
export const CURRENCY_SEPARATOR = /^-?\d+(,\d{3})*(\.\d{1,2})?$/;

/** 数字/货币金额 (只支持正数、不支持校验千分位分隔符) */
export const CURRENCY = /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0){1}$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/;

/** 银行卡号（10到30位, 覆盖对公/私账户, 参考[微信支付](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1)） */
export const BANK_CARD = /^[1-9]\d{9,29}$/;

/** 中文姓名 */
export const CHINESE_NAME = /^(?:[\u4e00-\u9fa5·]{2,16})$/;

/** 英文姓名 */
export const ENGLISH_NAME = /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/;

/** 车牌号(新能源) */
export const NEW_ENERGY_PLATE_NUMBER = /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/;

/** 车牌号(非新能源) */
export const NON_NEW_ENERGY_PLATE_NUMBER = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;

/** 车牌号(新能源+非新能源) */
export const PLATE_NUMBER = /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/;

/** date(日期) */
export const DATE = /^\d{4}(-)(1[0-2]|0?\d)\1([0-2]\d|\d|30|31)$/;

/** 座机(tel phone)电话(国内),如: 0341-86091234 */
export const TEL = /^\d{3}-\d{8}$|^\d{4}-\d{7}$/;

/** 身份证号（第一代，15位数字） */
export const ID_CARD_1G = /^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$/;

/** 身份证号（第二代，18位数字，最后一位是校验位，可能为数字或字符X） */
export const ID_CARD_2G = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0\d|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/;

/** 身份证号（支持第一代、第二代） */
export const ID_CARD = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/;

/** 护照（包含香港、澳门） */
export const PASSPORT = /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/;

/** 帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合 */
export const ACCOUNT = /^[a-zA-Z]\w{4,15}$/;

/** 中文/汉字 */
export const CHINESE = /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/;

/** QQ号 */
export const QQ = /^[1-9][0-9]{4,10}$/;

/** 微信号，6至20位，以字母开头，字母，数字，减号，下划线 */
export const WECHAT = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/;

/** 数字和字母组成 */
export const ALPHABET_AND_NUMBER = /^[A-Za-z0-9]+$/;

/** 中文和数字 */
export const CHINESE_AND_NUMBER = /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/;

/** 英文字母 */
export const ENGLISH_ALPHABET = /^[a-zA-Z]+$/;

/** 小写英文字母 */
export const LOWER_CASE_ENGLISH_ALPHABET = /^[a-z]+$/;

/** 大写英文字母 */
export const CAPITAL_ENGLISH_ALPHABET = /^[A-Z]+$/;

/** 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符 */
export const PASSWORD = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;

/** 用户名校验，4到16位（字母，数字，下划线，减号） */
export const USERNAME = /^[a-zA-Z0-9_-]{4,16}$/;

/** ip-v4 */
export const IPV4 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

/** ip-v6 */
export const IPV6 = /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i;

/** 16进制颜色 */
export const HEX_COLOR = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

/** 邮政编码（中国） */
export const POSTAL_CODE = /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/;

/** 不能包含字母 */
export const NON_ALPHABET = /^[^A-Za-z]*$/;

/** java包名 */
export const JAVA_PACKAGE_NAME = /^([a-zA-Z_][a-zA-Z0-9_]*)+([.][a-zA-Z_][a-zA-Z0-9_]*)+$/;

/** mac地址 */
export const MAC_ADDRESS = /^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i;
