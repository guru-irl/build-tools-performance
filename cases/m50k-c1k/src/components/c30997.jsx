import React from 'react';
const LABEL_30997 = 'component_30997';
export function Component30997({ value = 30997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30997, 'data-value': derived.doubled }, children);
}
export default Component30997;
