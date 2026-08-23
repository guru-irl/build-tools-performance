import React from 'react';
const LABEL_21876 = 'component_21876';
export function Component21876({ value = 21876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21876, 'data-value': derived.doubled }, children);
}
export default Component21876;
