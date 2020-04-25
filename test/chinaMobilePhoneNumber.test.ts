import * as regexp from '../src/utils/chinaMobilePhoneNumber';
import run from './template';
import { mockDataValid, mockDataInvalid } from './mocks/chinaMobilePhoneNumber';

run(
  regexp.isChinaMobileAll,
  [
    ...mockDataValid.reserved.sms,
    ...mockDataValid.iot.china_mobile,
    ...mockDataValid.iot.china_unicom,
    ...mockDataValid.iot.china_telecom
  ],
  [
    ...mockDataInvalid.reserved.sms,
    ...mockDataInvalid.iot.china_mobile,
    ...mockDataInvalid.iot.china_unicom,
    ...mockDataInvalid.iot.china_telecom
  ]
);

run(
  regexp.isChinaMobileSmsAll,
  mockDataValid.reserved.sms,
  mockDataInvalid.reserved.sms
);

run(
  regexp.isChinaMobilePhoneAll,
  [
    ...mockDataValid.carrier.china_mobile,
    ...mockDataValid.carrier.china_unicom,
    ...mockDataValid.carrier.china_telecom,
    ...mockDataValid.carrier.inmarsat,
    ...mockDataValid.carrier.miit
  ],
  [
    ...mockDataInvalid.carrier.china_mobile,
    ...mockDataInvalid.carrier.china_unicom,
    ...mockDataInvalid.carrier.china_telecom,
    ...mockDataInvalid.carrier.inmarsat,
    ...mockDataInvalid.carrier.miit
  ]
);

run(
  regexp.isChinaMobileCMCC,
  mockDataValid.carrier.china_mobile,
  mockDataInvalid.carrier.china_mobile
);

run(
  regexp.isChinaMobileCUCC,
  mockDataValid.carrier.china_unicom,
  mockDataInvalid.carrier.china_unicom
);

run(
  regexp.isChinaMobileCTCC,
  mockDataValid.carrier.china_telecom,
  mockDataInvalid.carrier.china_telecom
);

run(
  regexp.isChinaMobileINMARSAT,
  mockDataValid.carrier.inmarsat,
  mockDataInvalid.carrier.inmarsat
);

run(
  regexp.isChinaMobileMIIT,
  mockDataValid.carrier.miit,
  mockDataInvalid.carrier.miit
);

run(
  regexp.isChinaMobileMvnoAll,
  [
    ...mockDataValid.mvno.china_mobile,
    ...mockDataValid.mvno.china_unicom,
    ...mockDataValid.mvno.china_telecom
  ],
  [
    ...mockDataInvalid.mvno.china_mobile,
    ...mockDataInvalid.mvno.china_unicom,
    ...mockDataInvalid.mvno.china_telecom
  ]
);

run(
  regexp.isChinaMobileMvnoCMCC,
  mockDataValid.mvno.china_mobile,
  mockDataInvalid.mvno.china_mobile
);

run(
  regexp.isChinaMobileMvnoCUCC,
  mockDataValid.mvno.china_unicom,
  mockDataInvalid.mvno.china_unicom
);

run(
  regexp.isChinaMobileMvnoCTCC,
  mockDataValid.mvno.china_telecom,
  mockDataInvalid.mvno.china_telecom
);

run(
  regexp.isChinaMobileIotAll,
  [
    ...mockDataValid.iot.china_mobile,
    ...mockDataValid.iot.china_unicom,
    ...mockDataValid.iot.china_telecom
  ],
  [
    ...mockDataInvalid.iot.china_mobile,
    ...mockDataInvalid.iot.china_unicom,
    ...mockDataInvalid.iot.china_telecom
  ]
);

run(
  regexp.isChinaMobileIotCMCC,
  mockDataValid.iot.china_mobile,
  mockDataInvalid.iot.china_mobile
);

run(
  regexp.isChinaMobileIotCUCC,
  mockDataValid.iot.china_unicom,
  mockDataInvalid.iot.china_unicom
);

run(
  regexp.isChinaMobileIotCTCC,
  mockDataValid.iot.china_telecom,
  mockDataInvalid.iot.china_telecom
);

run(
  regexp.isChinaMobileDataAll,
  [
    ...mockDataValid.data_plan_only.china_mobile,
    ...mockDataValid.data_plan_only.china_unicom,
    ...mockDataValid.data_plan_only.china_telecom
  ],
  [
    ...mockDataInvalid.data_plan_only.china_mobile,
    ...mockDataInvalid.data_plan_only.china_unicom,
    ...mockDataInvalid.data_plan_only.china_telecom
  ]
);

run(
  regexp.isChinaMobileDataCMCC,
  mockDataValid.data_plan_only.china_mobile,
  mockDataInvalid.data_plan_only.china_mobile
);

run(
  regexp.isChinaMobileDataCUCC,
  mockDataValid.data_plan_only.china_unicom,
  mockDataInvalid.data_plan_only.china_unicom
);

run(
  regexp.isChinaMobileDataCTCC,
  mockDataValid.data_plan_only.china_telecom,
  mockDataInvalid.data_plan_only.china_telecom
);
