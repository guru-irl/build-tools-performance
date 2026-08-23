import React from 'react';
const LABEL_27815 = 'component_27815';
export function Component27815({ value = 27815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27815, 'data-value': derived.doubled }, children);
}
export default Component27815;
