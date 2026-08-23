import React from 'react';
const LABEL_16170 = 'component_16170';
export function Component16170({ value = 16170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16170, 'data-value': derived.doubled }, children);
}
export default Component16170;
