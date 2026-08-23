import React from 'react';
const LABEL_15876 = 'component_15876';
export function Component15876({ value = 15876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15876, 'data-value': derived.doubled }, children);
}
export default Component15876;
