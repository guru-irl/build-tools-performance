import React from 'react';
const LABEL_18729 = 'component_18729';
export function Component18729({ value = 18729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18729, 'data-value': derived.doubled }, children);
}
export default Component18729;
