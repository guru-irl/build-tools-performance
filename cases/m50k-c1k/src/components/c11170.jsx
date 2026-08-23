import React from 'react';
const LABEL_11170 = 'component_11170';
export function Component11170({ value = 11170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11170, 'data-value': derived.doubled }, children);
}
export default Component11170;
