import React from 'react';
const LABEL_18750 = 'component_18750';
export function Component18750({ value = 18750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18750, 'data-value': derived.doubled }, children);
}
export default Component18750;
