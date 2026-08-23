import React from 'react';
const LABEL_6750 = 'component_6750';
export function Component6750({ value = 6750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6750, 'data-value': derived.doubled }, children);
}
export default Component6750;
