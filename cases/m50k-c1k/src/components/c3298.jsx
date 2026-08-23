import React from 'react';
const LABEL_3298 = 'component_3298';
export function Component3298({ value = 3298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3298, 'data-value': derived.doubled }, children);
}
export default Component3298;
