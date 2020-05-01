// https://github.com/VincentSit/ChinaMobilePhoneNumberRegex
// 中国内地移动终端通讯号段: https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%9B%BD%E5%86%85%E5%9C%B0%E7%A7%BB%E5%8A%A8%E7%BB%88%E7%AB%AF%E9%80%9A%E8%AE%AF%E5%8F%B7%E6%AE%B5

/** 匹配所有号码（手机卡 + 数据卡 + 上网卡） */
export const MOBILE_ALL = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4(?:[14]0\d{3}|[68]\d{4}|[579]\d{2}))\d{6}$/;
/** 匹配所有支持短信功能的号码（手机卡 + 上网卡） */
export const MOBILE_SMS_ALL = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4[579]\d{2})\d{6}$/;

/** 匹配所有手机卡 */
export const MOBILE_PHONE_ALL = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[235-8]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|66\d{2})\d{6}$/;
/** 匹配中国移动 */
export const MOBILE_CMCC = /^(?:\+?86)?1(?:3(?:4[^9\D]|[5-9]\d)|5[^3-6\D]\d|7[28]\d|8[23478]\d|9[578]\d)\d{7}$/;
/** 匹配中国联通 */
export const MOBILE_CUCC = /^(?:\+?86)?1(?:3[0-2]|[578][56]|66|96)\d{8}$/;
/** 匹配中国电信 */
export const MOBILE_CTCC = /^(?:\+?86)?1(?:3(?:3\d|49)\d|53\d{2}|8[019]\d{2}|7(?:[37]\d{2}|40[0-5])|9[0139]\d{2})\d{6}$/;

/** 匹配中国广电 */
export const MOBILE_BROADCAST_NETWORK = /^(?:\+?86)?192\d{8}$/;

/** 匹配北京船舶通信导航有限公司（海事卫星通信） */
export const MOBILE_INMARSAT = /^(?:\+?86)?1749\d{7}$/;

/** 工业和信息化部应急通信保障中心（应急通信） */
export const MOBILE_MIIT = /^(?:\+?86)?174(?:0[6-9]|1[0-2])\d{6}$/;

/** 匹配所有虚拟运营商 */
export const MOBILE_MVNO_ALL = /^(?:\+?86)?1(?:7[01]|6[257])\d{8}$/;
/** 匹配中国移动（虚拟运营商） */
export const MOBILE_MVNO_CMCC = /^(?:\+?86)?1(?:65\d|70[356])\d{7}$/;
/** 匹配中国联通（虚拟运营商） */
export const MOBILE_MVNO_CUCC = /^(?:\+?86)?1(?:70[4789]|71\d|67\d)\d{7}$/;
/** 匹配中国电信（虚拟运营商） */
export const MOBILE_MVNO_CTCC = /^(?:\+?86)?1(?:70[012]|62\d)\d{7}$/;

/** 匹配所有物联网数据卡 */
export const MOBILE_IOT_ALL = /^(?:\+?86)?14(?:[14]0|[68]\d)\d{9}$/;
/** 匹配中国移动（物联网数据卡） */
export const MOBILE_IOT_CMCC = /^(?:\+?86)?14(?:40|8\d)\d{9}$/;
/** 匹配中国联通（物联网数据卡） */
export const MOBILE_IOT_CUCC = /^(?:\+?86)?146\d{10}$/;
/** 匹配中国电信（物联网数据卡） */
export const MOBILE_IOT_CTCC = /^(?:\+?86)?1410\d{9}$/;

/** 匹配所有上网卡 */
export const MOBILE_DATA_ALL = /^(?:\+?86)?14[579]\d{8}$/;
/** 匹配中国移动（上网卡） */
export const MOBILE_DATA_CMCC = /^(?:\+?86)?147\d{8}$/;
/** 匹配中国联通（上网卡） */
export const MOBILE_DATA_CUCC = /^(?:\+?86)?145\d{8}$/;
/** 匹配中国电信（上网卡） */
export const MOBILE_DATA_CTCC = /^(?:\+?86)?149\d{8}$/;
