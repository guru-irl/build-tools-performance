import React from 'react';
const LABEL_27211 = 'component_27211';
export function Component27211({ value = 27211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27211, 'data-value': derived.doubled }, children);
}
export default Component27211;
