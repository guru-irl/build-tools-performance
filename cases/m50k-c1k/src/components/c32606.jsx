import React from 'react';
const LABEL_32606 = 'component_32606';
export function Component32606({ value = 32606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32606, 'data-value': derived.doubled }, children);
}
export default Component32606;
