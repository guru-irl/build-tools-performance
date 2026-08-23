import React from 'react';
const LABEL_11222 = 'component_11222';
export function Component11222({ value = 11222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11222, 'data-value': derived.doubled }, children);
}
export default Component11222;
