import React from 'react';
const LABEL_20459 = 'component_20459';
export function Component20459({ value = 20459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20459, 'data-value': derived.doubled }, children);
}
export default Component20459;
