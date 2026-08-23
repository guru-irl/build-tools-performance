import React from 'react';
const LABEL_6731 = 'component_6731';
export function Component6731({ value = 6731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6731, 'data-value': derived.doubled }, children);
}
export default Component6731;
