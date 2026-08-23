import React from 'react';
const LABEL_672 = 'component_672';
export function Component672({ value = 672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_672, 'data-value': derived.doubled }, children);
}
export default Component672;
