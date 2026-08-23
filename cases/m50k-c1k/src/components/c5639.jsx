import React from 'react';
const LABEL_5639 = 'component_5639';
export function Component5639({ value = 5639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5639, 'data-value': derived.doubled }, children);
}
export default Component5639;
