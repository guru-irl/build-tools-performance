import React from 'react';
const LABEL_42213 = 'component_42213';
export function Component42213({ value = 42213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42213, 'data-value': derived.doubled }, children);
}
export default Component42213;
