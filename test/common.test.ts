import * as regexp from '../src/utils/common';
import run from './template';
import { mockDataValid, mockDataInvalid } from './mocks/common';

test('getUrlParams', () => {
  expect(regexp.getUrlParams()).toMatchObject({});
});

run(regexp.isEmail, mockDataValid.email, mockDataInvalid.email);

run(
  regexp.isPositiveInteger,
  mockDataValid.positiveInteger,
  mockDataInvalid.positiveInteger
);

run(
  regexp.isNegtiveInteger,
  mockDataValid.negtiveInteger,
  mockDataInvalid.negtiveInteger
);

run(
  regexp.isInteger,
  [...mockDataValid.positiveInteger, ...mockDataValid.negtiveInteger],
  [...mockDataInvalid.positiveInteger, ...mockDataInvalid.negtiveInteger]
);

run(
  regexp.isPositiveDecimal,
  mockDataValid.positiveDecimal,
  mockDataInvalid.positiveDecimal
);

run(
  regexp.isNegtiveDecimal,
  mockDataValid.negtiveDecimal,
  mockDataInvalid.negtiveDecimal
);

run(
  regexp.isDecimal,
  [...mockDataValid.positiveDecimal, ...mockDataValid.negtiveDecimal],
  [...mockDataInvalid.positiveDecimal, ...mockDataInvalid.negtiveDecimal]
);

run(
  regexp.isPositiveIntegerOrDecimal,
  [...mockDataValid.positiveInteger, ...mockDataValid.positiveDecimal],
  [...mockDataInvalid.positiveInteger, ...mockDataInvalid.positiveDecimal]
);

run(
  regexp.isNegtiveIntegerOrDecimal,
  [...mockDataValid.negtiveInteger, ...mockDataValid.negtiveDecimal],
  [...mockDataInvalid.negtiveInteger, ...mockDataInvalid.negtiveDecimal]
);

run(
  regexp.isIntegerOrDecimal,
  [
    ...mockDataValid.positiveInteger,
    ...mockDataValid.negtiveInteger,
    ...mockDataValid.positiveDecimal,
    ...mockDataValid.negtiveDecimal
  ],
  [
    ...mockDataInvalid.positiveInteger,
    ...mockDataInvalid.negtiveInteger,
    ...mockDataInvalid.positiveDecimal,
    ...mockDataInvalid.negtiveDecimal
  ]
);

run(regexp.isTrainTrips, mockDataValid.trainTrips, mockDataInvalid.trainTrips);

run(
  regexp.isPhoneCodeIMEI,
  mockDataValid.phoneCodeIMEI,
  mockDataInvalid.phoneCodeIMEI
);

run(
  regexp.isWebsiteUrlWithPort,
  mockDataValid.websiteUrlWithPort,
  mockDataInvalid.websiteUrlWithPort
);

run(regexp.isWebsiteUrl, mockDataValid.websiteUrl, mockDataInvalid.websiteUrl);

run(
  regexp.isUnifiedSocialCreditCode,
  mockDataValid.unifiedSocialCreditCode,
  mockDataInvalid.unifiedSocialCreditCode
);

run(
  regexp.isThunderLink,
  mockDataValid.thunderLink,
  mockDataInvalid.thunderLink
);

run(regexp.isEd2kLink, mockDataValid.ed2kLink, mockDataInvalid.ed2kLink);

run(regexp.isMagnetLink, mockDataValid.magnetLink, mockDataInvalid.magnetLink);

run(regexp.isSubnetMask, mockDataValid.subnetMask, mockDataInvalid.subnetMask);

run(
  regexp.isHiddenFilePathLinux,
  mockDataValid.hiddenFilePathLinux,
  mockDataInvalid.hiddenFilePathLinux
);

run(
  regexp.isFileFolderPathLinux,
  mockDataValid.fileFolderPathLinux,
  mockDataInvalid.fileFolderPathLinux
);

run(
  regexp.isFilePathLinux,
  mockDataValid.filePathLinux,
  mockDataInvalid.filePathLinux
);

run(
  regexp.isFileFolderPathWindows,
  mockDataValid.fileFolderPathWindows,
  mockDataInvalid.fileFolderPathWindows
);

run(
  regexp.isFilePathWindows,
  mockDataValid.filePathWindows,
  mockDataInvalid.filePathWindows
);

run(
  regexp.isAShareStockCode,
  mockDataValid.aShareStockCode,
  mockDataInvalid.aShareStockCode
);

run(
  regexp.isScoreOfExaminationPaper,
  mockDataValid.scoreOfExaminationPaper,
  mockDataInvalid.scoreOfExaminationPaper
);

run(
  regexp.isHTMLComments,
  mockDataValid.HTMLComments,
  mockDataInvalid.HTMLComments
);

run(regexp.isHTMLTag, mockDataValid.HTMLTag, mockDataInvalid.HTMLTag);

run(regexp.isMD5Format, mockDataValid.md5Format, mockDataInvalid.md5Format);

run(
  regexp.isVersionNumber,
  mockDataValid.versionNumber,
  mockDataInvalid.versionNumber
);

run(regexp.isVideoLink, mockDataValid.videoLink, mockDataInvalid.videoLink);

run(regexp.isImageLink, mockDataValid.imageLink, mockDataInvalid.imageLink);

run(regexp.isTime24Hour, mockDataValid.time24Hour, mockDataInvalid.time24Hour);

run(regexp.isTime12Hour, mockDataValid.time12Hour, mockDataInvalid.time12Hour);

run(regexp.isBase64, mockDataValid.base64, mockDataInvalid.base64);

run(
  regexp.isCurrencySeparator,
  mockDataValid.currencySeparator,
  mockDataInvalid.currencySeparator
);

run(regexp.isCurrency, mockDataValid.currency, mockDataInvalid.currency);

run(regexp.isBankCard, mockDataValid.bankCard, mockDataInvalid.bankCard);

run(
  regexp.isChineseName,
  mockDataValid.chineseName,
  mockDataInvalid.chineseName
);

run(
  regexp.isEnglishName,
  mockDataValid.englishName,
  mockDataInvalid.englishName,
  true,
);

run(
  regexp.isNewEnergyPlateNumber,
  mockDataValid.newEnergyPlateNumber,
  mockDataInvalid.newEnergyPlateNumber
);

run(
  regexp.isNonNewEnergyPlateNumber,
  mockDataValid.nonNewEnergyPlateNumber,
  mockDataInvalid.nonNewEnergyPlateNumber
);

run(
  regexp.isPlateNumber,
  [
    ...mockDataValid.newEnergyPlateNumber,
    ...mockDataValid.nonNewEnergyPlateNumber
  ],
  [
    ...mockDataInvalid.newEnergyPlateNumber,
    ...mockDataInvalid.nonNewEnergyPlateNumber
  ]
);

run(regexp.isDate, mockDataValid.date, mockDataInvalid.date);

run(regexp.isTel, mockDataValid.tel, mockDataInvalid.tel);

run(regexp.isIDCard1G, mockDataValid.idCard1G, mockDataInvalid.idCard1G);

run(regexp.isIDCard2G, mockDataValid.idCard2G, mockDataInvalid.idCard2G);

run(
  regexp.isIDCard,
  [...mockDataValid.idCard1G, ...mockDataValid.idCard2G],
  [...mockDataInvalid.idCard1G, ...mockDataInvalid.idCard2G]
);

run(regexp.isPassport, mockDataValid.passport, mockDataInvalid.passport);

run(regexp.isAccount, mockDataValid.account, mockDataInvalid.account);

run(regexp.isChineseCharacter, mockDataValid.chinese, mockDataInvalid.chinese);

run(regexp.isQQ, mockDataValid.QQ, mockDataInvalid.QQ);

run(regexp.isWeChat, mockDataValid.WECHAT, mockDataInvalid.WECHAT);

run(
  regexp.isAlphabetAndNumber,
  mockDataValid.alphabetAndNumber,
  mockDataInvalid.alphabetAndNumber
);

run(
  regexp.isChineseAndNumber,
  mockDataValid.chineseAndNumber,
  mockDataInvalid.chineseAndNumber
);

run(
  regexp.isEnglishAlphabet,
  mockDataValid.englishAlphabet,
  mockDataInvalid.englishAlphabet
);

run(
  regexp.isLowerCaseEnglishAlphabet,
  mockDataValid.lowerCaseEnglishAlphabet,
  mockDataInvalid.lowerCaseEnglishAlphabet
);

run(
  regexp.isCapitalEnglishAlphabet,
  mockDataValid.capitalEnglishAlphabet,
  mockDataInvalid.capitalEnglishAlphabet
);

run(regexp.isPassword, mockDataValid.password, mockDataInvalid.password);

run(regexp.isUsername, mockDataValid.username, mockDataInvalid.username);

run(regexp.isIPV4, mockDataValid.IPV4, mockDataInvalid.IPV4);

run(regexp.isIPV6, mockDataValid.IPV6, mockDataInvalid.IPV6);

run(regexp.isHexColor, mockDataValid.hexColor, mockDataInvalid.hexColor);

run(regexp.isPostalCode, mockDataValid.postalCode, mockDataInvalid.postalCode);

run(
  regexp.isNonAlphabet,
  mockDataValid.nonAlphabet,
  mockDataInvalid.nonAlphabet
);

run(
  regexp.isJavaPackageName,
  mockDataValid.javaPackageName,
  mockDataInvalid.javaPackageName
);

run(regexp.isMACAddress, mockDataValid.MACAddress, mockDataInvalid.MACAddress);
