import React from 'react';
const LABEL_23639 = 'component_23639';
export function Component23639({ value = 23639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23639, 'data-value': derived.doubled }, children);
}
export default Component23639;
