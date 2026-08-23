import React from 'react';
const LABEL_27882 = 'component_27882';
export function Component27882({ value = 27882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27882, 'data-value': derived.doubled }, children);
}
export default Component27882;
