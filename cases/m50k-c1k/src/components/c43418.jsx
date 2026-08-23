import React from 'react';
const LABEL_43418 = 'component_43418';
export function Component43418({ value = 43418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43418, 'data-value': derived.doubled }, children);
}
export default Component43418;
