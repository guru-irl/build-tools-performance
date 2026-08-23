import React from 'react';
const LABEL_27148 = 'component_27148';
export function Component27148({ value = 27148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27148, 'data-value': derived.doubled }, children);
}
export default Component27148;
