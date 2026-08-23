import React from 'react';
const LABEL_21729 = 'component_21729';
export function Component21729({ value = 21729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21729, 'data-value': derived.doubled }, children);
}
export default Component21729;
