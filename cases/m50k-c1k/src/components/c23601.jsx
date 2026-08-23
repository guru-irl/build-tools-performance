import React from 'react';
const LABEL_23601 = 'component_23601';
export function Component23601({ value = 23601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23601, 'data-value': derived.doubled }, children);
}
export default Component23601;
