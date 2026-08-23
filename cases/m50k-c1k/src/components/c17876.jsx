import React from 'react';
const LABEL_17876 = 'component_17876';
export function Component17876({ value = 17876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17876, 'data-value': derived.doubled }, children);
}
export default Component17876;
