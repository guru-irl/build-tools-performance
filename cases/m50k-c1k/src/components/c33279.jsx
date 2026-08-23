import React from 'react';
const LABEL_33279 = 'component_33279';
export function Component33279({ value = 33279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33279, 'data-value': derived.doubled }, children);
}
export default Component33279;
