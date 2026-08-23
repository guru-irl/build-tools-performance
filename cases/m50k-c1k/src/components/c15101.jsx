import React from 'react';
const LABEL_15101 = 'component_15101';
export function Component15101({ value = 15101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15101, 'data-value': derived.doubled }, children);
}
export default Component15101;
