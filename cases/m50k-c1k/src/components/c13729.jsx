import React from 'react';
const LABEL_13729 = 'component_13729';
export function Component13729({ value = 13729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13729, 'data-value': derived.doubled }, children);
}
export default Component13729;
