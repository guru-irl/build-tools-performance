import React from 'react';
const LABEL_15167 = 'component_15167';
export function Component15167({ value = 15167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15167, 'data-value': derived.doubled }, children);
}
export default Component15167;
