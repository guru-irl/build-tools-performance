import React from 'react';
const LABEL_24731 = 'component_24731';
export function Component24731({ value = 24731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24731, 'data-value': derived.doubled }, children);
}
export default Component24731;
