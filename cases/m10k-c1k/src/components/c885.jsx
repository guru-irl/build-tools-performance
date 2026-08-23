import React from 'react';
const LABEL_885 = 'component_885';
export function Component885({ value = 885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_885, 'data-value': derived.doubled }, children);
}
export default Component885;
