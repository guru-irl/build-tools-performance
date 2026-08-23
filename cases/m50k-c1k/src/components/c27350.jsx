import React from 'react';
const LABEL_27350 = 'component_27350';
export function Component27350({ value = 27350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27350, 'data-value': derived.doubled }, children);
}
export default Component27350;
