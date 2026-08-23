import React from 'react';
const LABEL_15750 = 'component_15750';
export function Component15750({ value = 15750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15750, 'data-value': derived.doubled }, children);
}
export default Component15750;
