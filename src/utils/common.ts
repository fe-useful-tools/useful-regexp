import * as Reg from '../regexp/common';

export const getUrlParams = (): Record<string, string> => {
  const query: Record<string, string> = {};
  if (typeof window === 'undefined') {
    return query;
  }
  window.location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k: string, v: string) => (query[k] = v));
  return query;
};

/** 邮箱 */
export const isEmail = (email: string = ''): boolean => (
  Reg.EMAIL.test(email.toLowerCase())
);

/** 正整数 */
export const isPositiveInteger = (num: string): boolean => (
  Reg.POSITIVE_INTEGER.test(num)
);

/** 负整数 */
export const isNegtiveInteger = (num: string): boolean => (
  Reg.NEGTIVE_INTEGER.test(num)
);

/** 整数 */
export const isInteger = (num: string): boolean => (
  Reg.INTEGER.test(num)
);

/** 正浮点数 */
export const isPositiveDecimal = (num: string): boolean => (
  Reg.POSITIVE_DECIMAL.test(num)
);

/** 负浮点数 */
export const isNegtiveDecimal = (num: string): boolean => (
  Reg.NEGTIVE_DECIMAL.test(num)
);

/** 浮点数 */
export const isDecimal = (num: string): boolean => (
  Reg.DECIMAL.test(num)
);

/** 正整数或正浮点数 */
export const isPositiveIntegerOrDecimal = (num: string): boolean => (
  Reg.POSITIVE_INTEGER_OR_DECIMAL.test(num)
);

/** 负整数或负浮点数 */
export const isNegtiveIntegerOrDecimal = (num: string): boolean => (
  Reg.NEGTIVE_INTEGER_OR_DECIMAL.test(num)
);

/** 整数或浮点数 */
export const isIntegerOrDecimal = (num: string): boolean => (
  Reg.INTEGER_OR_DECIMAL.test(num)
);

/** 火车车次 */
export const isTrainTrips = (value: string) => (
  Reg.TRAIN_TRIPS.test(value)
);

/** 国际移动设备身份码(International Mobile Equipment Identity) */
export const isPhoneCodeIMEI = (value: string) => (
  Reg.PHONE_CODE_IMEI.test(value)
);

/** 必须带端口号的网址(或ip) */
export const isWebsiteUrlWithPort = (value: string) => (
  Reg.WEBSITE_URL_WITH_PORT.test(value)
);

/** 网址(支持端口和"?+参数"和"#+参数) */
export const isWebsiteUrl = (value: string) => (
  Reg.WEBSITE_URL.test(value)
);

/** 统一社会信用代码 */
export const isUnifiedSocialCreditCode = (value: string) => (
  Reg.UNIFIED_SOCIAL_CREDIT_CODE.test(value)
);

/** 迅雷链接 */
export const isThunderLink = (value: string) => (
  Reg.THUNDER_LINK.test(value)
);

/** ed2k链接(宽松匹配) */
export const isEd2kLink = (value: string) => (
  Reg.ED2K_LINK.test(value)
);

/** 磁力链接(宽松匹配) */
export const isMagnetLink = (value: string) => (
  Reg.MAGNET_LINK.test(value)
);

/** 子网掩码 */
export const isSubnetMask = (value: string) => (
  Reg.SUBNET_MASK.test(value)
);

/** linux"隐藏文件"路径 */
export const isHiddenFilePathLinux = (value: string) => (
  Reg.HIDDEN_FILE_PATH_LINUX.test(value)
);

/** linux"文件(夹)"路径 */
export const isFileFolderPathLinux = (value: string) => (
  Reg.FILE_FOLDER_PATH_LINUX.test(value)
);

/** linux"文件"路径 */
export const isFilePathLinux = (value: string) => (
  Reg.FILE_PATH_LINUX.test(value)
);

/** window"文件夹"路径 */
export const isFileFolderPathWindows = (value: string) => (
  Reg.FILE_FOLDER_PATH_WINDOWS.test(value)
);

/** window下"文件"路径 */
export const isFilePathWindows = (value: string) => (
  Reg.FILE_PATH_WINDOWS.test(value)
);

/** 股票代码(A股) */
export const isAShareStockCode = (value: string) => (
  Reg.A_SHARE_STOCK_CODE.test(value)
);

/** 大于等于0, 小于等于150, 支持小数位出现5, 如145.5, 用于判断考卷分数 */
export const isScoreOfExaminationPaper = (value: string) => (
  Reg.SCORE_OF_EXAMINATION_PAPER.test(value)
);

/** html注释 */
export const isHTMLComments = (value: string) => (
  Reg.HTML_COMMENTS.test(value)
);

/** html标签(宽松匹配) */
export const isHTMLTag = (value: string) => (
  Reg.HTML_TAG.test(value)
);

/** md5格式(32位) */
export const isMD5Format = (value: string) => (
  Reg.MD5_FORMAT.test(value)
);

/** 版本号格式必须为X.Y.Z */
export const isVersionNumber = (value: string) => (
  Reg.VERSION_NUMBER.test(value)
);

/** 视频链接地址（视频格式可按需增删） */
export const isVideoLink = (value: string) => (
  Reg.VIDEO_LINK.test(value)
);

/** 图片链接地址（图片格式可按需增删） */
export const isImageLink = (value: string) => (
  Reg.IMAGE_LINK.test(value)
);

/** 24小时制时间（HH:mm:ss） */
export const isTime24Hour = (value: string) => (
  Reg.TIME_24_HOUR.test(value)
);

/** 12小时制时间（hh:mm:ss） */
export const isTime12Hour = (value: string) => (
  Reg.TIME_12_HOUR.test(value)
);

/** base64格式 */
export const isBase64 = (value: string) => (
  Reg.BASE64.test(value)
);

/** 数字/货币金额（支持负数、千分位分隔符） */
export const isCurrencySeparator = (value: string) => (
  Reg.CURRENCY_SEPARATOR.test(value)
);

/** 数字/货币金额 (只支持正数、不支持校验千分位分隔符) */
export const isCurrency = (value: string) => (
  Reg.CURRENCY.test(value)
);

/** 银行卡号（10到30位, 覆盖对公/私账户, 参考[微信支付](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1)） */
export const isBankCard = (value: string) => (
  Reg.BANK_CARD.test(value)
);

/** 中文姓名 */
export const isChineseName = (value: string) => (
  Reg.CHINESE_NAME.test(value)
);

/** 英文姓名 */
export const isEnglishName = (value: string) => (
  Reg.ENGLISH_NAME.test(value)
);

/** 车牌号(新能源) */
export const isNewEnergyPlateNumber = (value: string) => (
  Reg.NEW_ENERGY_PLATE_NUMBER.test(value)
);

/** 车牌号(非新能源) */
export const isNonNewEnergyPlateNumber = (value: string) => (
  Reg.NON_NEW_ENERGY_PLATE_NUMBER.test(value)
);

/** 车牌号(新能源+非新能源) */
export const isPlateNumber = (value: string) => (
  Reg.PLATE_NUMBER.test(value)
);

/** date(日期) */
export const isDate = (value: string) => (
  Reg.DATE.test(value)
);

/** 座机(tel phone)电话(国内),如: 0341-86091234 */
export const isTel = (value: string) => (
  Reg.TEL.test(value)
);

/** 身份证号（第一代，15位数字） */
export const isIDCard1G = (value: string) => (
  Reg.ID_CARD_1G.test(value)
);

/** 身份证号（第二代，18位数字，最后一位是校验位，可能为数字或字符X） */
export const isIDCard2G = (value: string) => (
  Reg.ID_CARD_2G.test(value)
);

/** 身份证号（支持第一代、第二代） */
export const isIDCard = (value: string) => (
  Reg.ID_CARD.test(value)
);

/** 护照（包含香港、澳门） */
export const isPassport = (value: string) => (
  Reg.PASSPORT.test(value)
);

/** 帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合 */
export const isAccount = (value: string) => (
  Reg.ACCOUNT.test(value)
);

/** 中文/汉字 */
export const isChineseCharacter = (value: string) => (
  Reg.CHINESE.test(value)
);

/** QQ号 */
export const isQQ = (value: string) => (
  Reg.QQ.test(value)
);

/** 微信号，6至20位，以字母开头，字母，数字，减号，下划线 */
export const isWeChat = (value: string) => (
  Reg.WECHAT.test(value)
);

/** 数字和字母组成 */
export const isAlphabetAndNumber = (value: string) => (
  Reg.ALPHABET_AND_NUMBER.test(value)
);

/** 中文和数字 */
export const isChineseAndNumber = (value: string) => (
  Reg.CHINESE_AND_NUMBER.test(value)
);

/** 英文字母 */
export const isEnglishAlphabet = (value: string) => (
  Reg.ENGLISH_ALPHABET.test(value)
);

/** 小写英文字母 */
export const isLowerCaseEnglishAlphabet = (value: string) => (
  Reg.LOWER_CASE_ENGLISH_ALPHABET.test(value)
);

/** 大写英文字母 */
export const isCapitalEnglishAlphabet = (value: string) => (
  Reg.CAPITAL_ENGLISH_ALPHABET.test(value)
);

/** 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符 */
export const isPassword = (value: string) => (
  Reg.PASSWORD.test(value)
);

/** 用户名校验，4到16位（字母，数字，下划线，减号） */
export const isUsername = (value: string) => (
  Reg.USERNAME.test(value)
);

/** ip-v4 */
export const isIPV4 = (value: string) => (
  Reg.IPV4.test(value)
);

/** ip-v6 */
export const isIPV6 = (value: string) => (
  Reg.IPV6.test(value)
);

/** 16进制颜色 */
export const isHexColor = (value: string) => (
  Reg.HEX_COLOR.test(value)
);

/** 邮政编码（中国） */
export const isPostalCode = (value: string) => (
  Reg.POSTAL_CODE.test(value)
);

/** 不能包含字母 */
export const isNonAlphabet = (value: string) => (
  Reg.NON_ALPHABET.test(value)
);

/** java包名 */
export const isJavaPackageName = (value: string) => (
  Reg.JAVA_PACKAGE_NAME.test(value)
);

/** mac地址 */
export const isMACAddress = (value: string) => (
  Reg.MAC_ADDRESS.test(value)
);
