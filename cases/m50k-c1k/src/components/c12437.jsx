import React from 'react';
const LABEL_12437 = 'component_12437';
export function Component12437({ value = 12437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12437, 'data-value': derived.doubled }, children);
}
export default Component12437;
