import React from 'react';
const LABEL_27273 = 'component_27273';
export function Component27273({ value = 27273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27273, 'data-value': derived.doubled }, children);
}
export default Component27273;
