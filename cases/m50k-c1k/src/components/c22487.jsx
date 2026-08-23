import React from 'react';
const LABEL_22487 = 'component_22487';
export function Component22487({ value = 22487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22487, 'data-value': derived.doubled }, children);
}
export default Component22487;
