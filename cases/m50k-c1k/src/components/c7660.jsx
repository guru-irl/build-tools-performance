import React from 'react';
const LABEL_7660 = 'component_7660';
export function Component7660({ value = 7660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7660, 'data-value': derived.doubled }, children);
}
export default Component7660;
