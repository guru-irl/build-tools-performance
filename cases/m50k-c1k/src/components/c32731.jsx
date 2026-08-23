import React from 'react';
const LABEL_32731 = 'component_32731';
export function Component32731({ value = 32731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32731, 'data-value': derived.doubled }, children);
}
export default Component32731;
