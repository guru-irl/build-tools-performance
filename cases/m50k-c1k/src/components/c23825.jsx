import React from 'react';
const LABEL_23825 = 'component_23825';
export function Component23825({ value = 23825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23825, 'data-value': derived.doubled }, children);
}
export default Component23825;
