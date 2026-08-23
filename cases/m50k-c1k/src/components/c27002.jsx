import React from 'react';
const LABEL_27002 = 'component_27002';
export function Component27002({ value = 27002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27002, 'data-value': derived.doubled }, children);
}
export default Component27002;
