import React from 'react';
const LABEL_12148 = 'component_12148';
export function Component12148({ value = 12148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12148, 'data-value': derived.doubled }, children);
}
export default Component12148;
