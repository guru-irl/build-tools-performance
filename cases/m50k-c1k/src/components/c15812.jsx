import React from 'react';
const LABEL_15812 = 'component_15812';
export function Component15812({ value = 15812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15812, 'data-value': derived.doubled }, children);
}
export default Component15812;
