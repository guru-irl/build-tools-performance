import React from 'react';
const LABEL_35601 = 'component_35601';
export function Component35601({ value = 35601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35601, 'data-value': derived.doubled }, children);
}
export default Component35601;
