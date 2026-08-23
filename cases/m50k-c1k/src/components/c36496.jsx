import React from 'react';
const LABEL_36496 = 'component_36496';
export function Component36496({ value = 36496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36496, 'data-value': derived.doubled }, children);
}
export default Component36496;
