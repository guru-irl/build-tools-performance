import React from 'react';
const LABEL_27596 = 'component_27596';
export function Component27596({ value = 27596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27596, 'data-value': derived.doubled }, children);
}
export default Component27596;
