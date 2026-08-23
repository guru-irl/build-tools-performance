import React from 'react';
const LABEL_14128 = 'component_14128';
export function Component14128({ value = 14128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14128, 'data-value': derived.doubled }, children);
}
export default Component14128;
