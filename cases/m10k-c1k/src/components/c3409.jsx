import React from 'react';
const LABEL_3409 = 'component_3409';
export function Component3409({ value = 3409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3409, 'data-value': derived.doubled }, children);
}
export default Component3409;
