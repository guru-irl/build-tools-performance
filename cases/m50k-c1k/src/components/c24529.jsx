import React from 'react';
const LABEL_24529 = 'component_24529';
export function Component24529({ value = 24529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24529, 'data-value': derived.doubled }, children);
}
export default Component24529;
