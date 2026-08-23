import React from 'react';
const LABEL_20853 = 'component_20853';
export function Component20853({ value = 20853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20853, 'data-value': derived.doubled }, children);
}
export default Component20853;
