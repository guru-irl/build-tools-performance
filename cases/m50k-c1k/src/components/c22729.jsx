import React from 'react';
const LABEL_22729 = 'component_22729';
export function Component22729({ value = 22729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22729, 'data-value': derived.doubled }, children);
}
export default Component22729;
