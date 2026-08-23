import React from 'react';
const LABEL_27131 = 'component_27131';
export function Component27131({ value = 27131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27131, 'data-value': derived.doubled }, children);
}
export default Component27131;
