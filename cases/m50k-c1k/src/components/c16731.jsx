import React from 'react';
const LABEL_16731 = 'component_16731';
export function Component16731({ value = 16731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16731, 'data-value': derived.doubled }, children);
}
export default Component16731;
