import React from 'react';
const LABEL_23148 = 'component_23148';
export function Component23148({ value = 23148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23148, 'data-value': derived.doubled }, children);
}
export default Component23148;
