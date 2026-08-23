import React from 'react';
const LABEL_44101 = 'component_44101';
export function Component44101({ value = 44101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44101, 'data-value': derived.doubled }, children);
}
export default Component44101;
