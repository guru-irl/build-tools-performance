import React from 'react';
const LABEL_39265 = 'component_39265';
export function Component39265({ value = 39265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39265, 'data-value': derived.doubled }, children);
}
export default Component39265;
