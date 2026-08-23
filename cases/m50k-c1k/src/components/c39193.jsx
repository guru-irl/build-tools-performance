import React from 'react';
const LABEL_39193 = 'component_39193';
export function Component39193({ value = 39193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39193, 'data-value': derived.doubled }, children);
}
export default Component39193;
