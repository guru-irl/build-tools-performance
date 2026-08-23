import React from 'react';
const LABEL_15649 = 'component_15649';
export function Component15649({ value = 15649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15649, 'data-value': derived.doubled }, children);
}
export default Component15649;
