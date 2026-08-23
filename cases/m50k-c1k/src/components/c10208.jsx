import React from 'react';
const LABEL_10208 = 'component_10208';
export function Component10208({ value = 10208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10208, 'data-value': derived.doubled }, children);
}
export default Component10208;
