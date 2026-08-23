import React from 'react';
const LABEL_13731 = 'component_13731';
export function Component13731({ value = 13731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13731, 'data-value': derived.doubled }, children);
}
export default Component13731;
