import React from 'react';
const LABEL_43095 = 'component_43095';
export function Component43095({ value = 43095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43095, 'data-value': derived.doubled }, children);
}
export default Component43095;
