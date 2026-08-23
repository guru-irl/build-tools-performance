import React from 'react';
const LABEL_26876 = 'component_26876';
export function Component26876({ value = 26876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26876, 'data-value': derived.doubled }, children);
}
export default Component26876;
