import React from 'react';
const LABEL_27117 = 'component_27117';
export function Component27117({ value = 27117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27117, 'data-value': derived.doubled }, children);
}
export default Component27117;
