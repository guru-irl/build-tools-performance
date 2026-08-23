import React from 'react';
const LABEL_6738 = 'component_6738';
export function Component6738({ value = 6738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6738, 'data-value': derived.doubled }, children);
}
export default Component6738;
