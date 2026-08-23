import React from 'react';
const LABEL_36750 = 'component_36750';
export function Component36750({ value = 36750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36750, 'data-value': derived.doubled }, children);
}
export default Component36750;
