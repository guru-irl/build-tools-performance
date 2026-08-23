import React from 'react';
const LABEL_31876 = 'component_31876';
export function Component31876({ value = 31876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31876, 'data-value': derived.doubled }, children);
}
export default Component31876;
