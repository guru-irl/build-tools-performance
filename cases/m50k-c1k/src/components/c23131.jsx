import React from 'react';
const LABEL_23131 = 'component_23131';
export function Component23131({ value = 23131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23131, 'data-value': derived.doubled }, children);
}
export default Component23131;
