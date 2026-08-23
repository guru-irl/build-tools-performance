import React from 'react';
const LABEL_32148 = 'component_32148';
export function Component32148({ value = 32148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32148, 'data-value': derived.doubled }, children);
}
export default Component32148;
