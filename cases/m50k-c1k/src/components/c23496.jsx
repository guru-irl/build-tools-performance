import React from 'react';
const LABEL_23496 = 'component_23496';
export function Component23496({ value = 23496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23496, 'data-value': derived.doubled }, children);
}
export default Component23496;
