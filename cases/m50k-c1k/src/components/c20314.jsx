import React from 'react';
const LABEL_20314 = 'component_20314';
export function Component20314({ value = 20314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20314, 'data-value': derived.doubled }, children);
}
export default Component20314;
