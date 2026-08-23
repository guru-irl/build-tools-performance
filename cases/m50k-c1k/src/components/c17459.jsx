import React from 'react';
const LABEL_17459 = 'component_17459';
export function Component17459({ value = 17459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17459, 'data-value': derived.doubled }, children);
}
export default Component17459;
