import React from 'react';
const LABEL_16092 = 'component_16092';
export function Component16092({ value = 16092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16092, 'data-value': derived.doubled }, children);
}
export default Component16092;
