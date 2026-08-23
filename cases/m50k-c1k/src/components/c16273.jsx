import React from 'react';
const LABEL_16273 = 'component_16273';
export function Component16273({ value = 16273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16273, 'data-value': derived.doubled }, children);
}
export default Component16273;
