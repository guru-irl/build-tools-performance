import React from 'react';
const LABEL_34095 = 'component_34095';
export function Component34095({ value = 34095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34095, 'data-value': derived.doubled }, children);
}
export default Component34095;
