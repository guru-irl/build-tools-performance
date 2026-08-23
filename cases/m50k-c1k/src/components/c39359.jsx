import React from 'react';
const LABEL_39359 = 'component_39359';
export function Component39359({ value = 39359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39359, 'data-value': derived.doubled }, children);
}
export default Component39359;
