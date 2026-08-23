import React from 'react';
const LABEL_27014 = 'component_27014';
export function Component27014({ value = 27014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27014, 'data-value': derived.doubled }, children);
}
export default Component27014;
