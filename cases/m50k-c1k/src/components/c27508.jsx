import React from 'react';
const LABEL_27508 = 'component_27508';
export function Component27508({ value = 27508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27508, 'data-value': derived.doubled }, children);
}
export default Component27508;
