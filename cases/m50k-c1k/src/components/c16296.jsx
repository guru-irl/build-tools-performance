import React from 'react';
const LABEL_16296 = 'component_16296';
export function Component16296({ value = 16296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16296, 'data-value': derived.doubled }, children);
}
export default Component16296;
