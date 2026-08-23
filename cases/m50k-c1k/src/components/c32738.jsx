import React from 'react';
const LABEL_32738 = 'component_32738';
export function Component32738({ value = 32738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32738, 'data-value': derived.doubled }, children);
}
export default Component32738;
