import React from 'react';
const LABEL_29650 = 'component_29650';
export function Component29650({ value = 29650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29650, 'data-value': derived.doubled }, children);
}
export default Component29650;
