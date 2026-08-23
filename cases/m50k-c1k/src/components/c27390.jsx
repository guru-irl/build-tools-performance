import React from 'react';
const LABEL_27390 = 'component_27390';
export function Component27390({ value = 27390, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27390, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27390, 'data-value': derived.doubled }, children);
}
export default Component27390;
