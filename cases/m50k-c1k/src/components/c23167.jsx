import React from 'react';
const LABEL_23167 = 'component_23167';
export function Component23167({ value = 23167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23167, 'data-value': derived.doubled }, children);
}
export default Component23167;
