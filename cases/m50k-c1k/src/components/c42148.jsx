import React from 'react';
const LABEL_42148 = 'component_42148';
export function Component42148({ value = 42148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42148, 'data-value': derived.doubled }, children);
}
export default Component42148;
