import React from 'react';
const LABEL_21266 = 'component_21266';
export function Component21266({ value = 21266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21266, 'data-value': derived.doubled }, children);
}
export default Component21266;
