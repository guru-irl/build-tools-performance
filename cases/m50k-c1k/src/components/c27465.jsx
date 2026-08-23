import React from 'react';
const LABEL_27465 = 'component_27465';
export function Component27465({ value = 27465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27465, 'data-value': derived.doubled }, children);
}
export default Component27465;
