import React from 'react';
const LABEL_27821 = 'component_27821';
export function Component27821({ value = 27821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27821, 'data-value': derived.doubled }, children);
}
export default Component27821;
