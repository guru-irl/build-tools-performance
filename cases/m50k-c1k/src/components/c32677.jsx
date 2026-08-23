import React from 'react';
const LABEL_32677 = 'component_32677';
export function Component32677({ value = 32677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32677, 'data-value': derived.doubled }, children);
}
export default Component32677;
