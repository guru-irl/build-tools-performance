import React from 'react';
const LABEL_21639 = 'component_21639';
export function Component21639({ value = 21639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21639, 'data-value': derived.doubled }, children);
}
export default Component21639;
