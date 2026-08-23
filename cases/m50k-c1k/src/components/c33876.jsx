import React from 'react';
const LABEL_33876 = 'component_33876';
export function Component33876({ value = 33876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33876, 'data-value': derived.doubled }, children);
}
export default Component33876;
