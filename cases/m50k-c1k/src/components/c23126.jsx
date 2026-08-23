import React from 'react';
const LABEL_23126 = 'component_23126';
export function Component23126({ value = 23126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23126, 'data-value': derived.doubled }, children);
}
export default Component23126;
