const run = (
  isFunction: Function,
  valid: string[],
  invalid: string[],
  skipTextCheck?: boolean,
) => {
  /**
   * Test every valid example against regex
   */
  valid.forEach((element) => {
    test(`Valid: ${element}`, () => {
      expect(isFunction(element)).toBeTruthy();
    });
  });

  /**
   * Test every invalid example against regex
   */
  invalid.forEach((element) => {
    test(`Invalid: ${element}`, () => {
      expect(isFunction(element)).toBeFalsy();
    });
  });

  /**
   * Test every valid example in text against regex
   */
  valid.forEach((element) => {
    if (skipTextCheck) return;
    test(`Invalid: asd ${element} asd`, () => {
      expect(isFunction(`asd ${element} asd`)).toBeFalsy();
    });
  });
};

// eslint-disable-next-line jest/no-export
export default run;
