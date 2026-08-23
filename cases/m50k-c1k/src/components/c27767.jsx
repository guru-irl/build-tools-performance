import React from 'react';
const LABEL_27767 = 'component_27767';
export function Component27767({ value = 27767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27767, 'data-value': derived.doubled }, children);
}
export default Component27767;
