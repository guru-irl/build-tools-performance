import React from 'react';
const LABEL_5985 = 'component_5985';
export function Component5985({ value = 5985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5985, 'data-value': derived.doubled }, children);
}
export default Component5985;
