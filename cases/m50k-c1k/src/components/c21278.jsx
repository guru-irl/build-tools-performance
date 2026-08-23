import React from 'react';
const LABEL_21278 = 'component_21278';
export function Component21278({ value = 21278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21278, 'data-value': derived.doubled }, children);
}
export default Component21278;
