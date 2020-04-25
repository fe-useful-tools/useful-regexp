import * as Reg from '../regexp/chinaMobilePhoneNumber';

/** 匹配所有号码（手机卡 + 数据卡 + 上网卡） */
export const isChinaMobileAll = (mobile: string): boolean => (
  Reg.MOBILE_ALL.test(mobile)
);

/** 匹配所有支持短信功能的号码（手机卡 + 上网卡） */
export const isChinaMobileSmsAll = (mobile: string): boolean => (
  Reg.MOBILE_SMS_ALL.test(mobile)
);

/** 匹配所有手机卡 */
export const isChinaMobilePhoneAll = (mobile: string): boolean => (
  Reg.MOBILE_PHONE_ALL.test(mobile)
);

/** 匹配中国移动 */
export const isChinaMobileCMCC = (mobile: string): boolean => (
  Reg.MOBILE_CMCC.test(mobile)
);

/** 匹配中国联通 */
export const isChinaMobileCUCC = (mobile: string): boolean => (
  Reg.MOBILE_CUCC.test(mobile)
);

/** 匹配中国电信 */
export const isChinaMobileCTCC = (mobile: string): boolean => (
  Reg.MOBILE_CTCC.test(mobile)
);

/** 匹配北京船舶通信导航有限公司（海事卫星通信） */
export const isChinaMobileINMARSAT = (mobile: string): boolean => (
  Reg.MOBILE_INMARSAT.test(mobile)
);

/** 工业和信息化部应急通信保障中心（应急通信） */
export const isChinaMobileMIIT = (mobile: string): boolean => (
  Reg.MOBILE_MIIT.test(mobile)
);

/** 匹配所有虚拟运营商 */
export const isChinaMobileMvnoAll = (mobile: string): boolean => (
  Reg.MOBILE_MVNO_ALL.test(mobile)
);

/** 匹配中国移动（虚拟运营商） */
export const isChinaMobileMvnoCMCC = (mobile: string): boolean => (
  Reg.MOBILE_MVNO_CMCC.test(mobile)
);

/** 匹配中国联通（虚拟运营商） */
export const isChinaMobileMvnoCUCC = (mobile: string): boolean => (
  Reg.MOBILE_MVNO_CUCC.test(mobile)
);

/** 匹配中国电信（虚拟运营商） */
export const isChinaMobileMvnoCTCC = (mobile: string): boolean => (
  Reg.MOBILE_MVNO_CTCC.test(mobile)
);

/** 匹配所有物联网数据卡 */
export const isChinaMobileIotAll = (mobile: string): boolean => (
  Reg.MOBILE_IOT_ALL.test(mobile)
);

/** 匹配中国移动（物联网数据卡） */
export const isChinaMobileIotCMCC = (mobile: string): boolean => (
  Reg.MOBILE_IOT_CMCC.test(mobile)
);

/** 匹配中国联通（物联网数据卡） */
export const isChinaMobileIotCUCC = (mobile: string): boolean => (
  Reg.MOBILE_IOT_CUCC.test(mobile)
);

/** 匹配中国电信（物联网数据卡） */
export const isChinaMobileIotCTCC = (mobile: string): boolean => (
  Reg.MOBILE_IOT_CTCC.test(mobile)
);

/** 匹配所有上网卡 */
export const isChinaMobileDataAll = (mobile: string): boolean => (
  Reg.MOBILE_DATA_ALL.test(mobile)
);

/** 匹配中国移动（上网卡） */
export const isChinaMobileDataCMCC = (mobile: string): boolean => (
  Reg.MOBILE_DATA_CMCC.test(mobile)
);

/** 匹配中国联通（上网卡） */
export const isChinaMobileDataCUCC = (mobile: string): boolean => (
  Reg.MOBILE_DATA_CUCC.test(mobile)
);

/** 匹配中国电信（上网卡） */
export const isChinaMobileDataCTCC = (mobile: string): boolean => (
  Reg.MOBILE_DATA_CTCC.test(mobile)
);
