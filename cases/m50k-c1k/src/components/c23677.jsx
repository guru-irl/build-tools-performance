import React from 'react';
const LABEL_23677 = 'component_23677';
export function Component23677({ value = 23677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23677, 'data-value': derived.doubled }, children);
}
export default Component23677;
