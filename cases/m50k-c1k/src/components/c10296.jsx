import React from 'react';
const LABEL_10296 = 'component_10296';
export function Component10296({ value = 10296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10296, 'data-value': derived.doubled }, children);
}
export default Component10296;
