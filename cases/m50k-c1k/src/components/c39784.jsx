import React from 'react';
const LABEL_39784 = 'component_39784';
export function Component39784({ value = 39784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39784, 'data-value': derived.doubled }, children);
}
export default Component39784;
