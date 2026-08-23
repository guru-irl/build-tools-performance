import React from 'react';
const LABEL_10957 = 'component_10957';
export function Component10957({ value = 10957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10957, 'data-value': derived.doubled }, children);
}
export default Component10957;
