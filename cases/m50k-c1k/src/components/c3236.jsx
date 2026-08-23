import React from 'react';
const LABEL_3236 = 'component_3236';
export function Component3236({ value = 3236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3236, 'data-value': derived.doubled }, children);
}
export default Component3236;
