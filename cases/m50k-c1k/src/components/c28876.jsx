import React from 'react';
const LABEL_28876 = 'component_28876';
export function Component28876({ value = 28876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28876, 'data-value': derived.doubled }, children);
}
export default Component28876;
