import React from 'react';
const LABEL_27715 = 'component_27715';
export function Component27715({ value = 27715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27715, 'data-value': derived.doubled }, children);
}
export default Component27715;
