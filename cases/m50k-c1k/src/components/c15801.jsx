import React from 'react';
const LABEL_15801 = 'component_15801';
export function Component15801({ value = 15801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15801, 'data-value': derived.doubled }, children);
}
export default Component15801;
