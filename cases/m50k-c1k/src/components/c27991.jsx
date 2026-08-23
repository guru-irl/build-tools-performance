import React from 'react';
const LABEL_27991 = 'component_27991';
export function Component27991({ value = 27991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27991, 'data-value': derived.doubled }, children);
}
export default Component27991;
