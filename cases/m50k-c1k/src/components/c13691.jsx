import React from 'react';
const LABEL_13691 = 'component_13691';
export function Component13691({ value = 13691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13691, 'data-value': derived.doubled }, children);
}
export default Component13691;
