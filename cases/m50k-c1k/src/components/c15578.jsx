import React from 'react';
const LABEL_15578 = 'component_15578';
export function Component15578({ value = 15578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15578, 'data-value': derived.doubled }, children);
}
export default Component15578;
