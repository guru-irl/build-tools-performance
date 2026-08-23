import React from 'react';
const LABEL_36128 = 'component_36128';
export function Component36128({ value = 36128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36128, 'data-value': derived.doubled }, children);
}
export default Component36128;
