import React from 'react';
const LABEL_39128 = 'component_39128';
export function Component39128({ value = 39128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39128, 'data-value': derived.doubled }, children);
}
export default Component39128;
