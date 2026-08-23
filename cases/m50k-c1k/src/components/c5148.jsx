import React from 'react';
const LABEL_5148 = 'component_5148';
export function Component5148({ value = 5148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5148, 'data-value': derived.doubled }, children);
}
export default Component5148;
