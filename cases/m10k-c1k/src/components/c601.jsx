import React from 'react';
const LABEL_601 = 'component_601';
export function Component601({ value = 601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_601, 'data-value': derived.doubled }, children);
}
export default Component601;
