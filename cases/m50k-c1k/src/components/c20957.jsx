import React from 'react';
const LABEL_20957 = 'component_20957';
export function Component20957({ value = 20957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20957, 'data-value': derived.doubled }, children);
}
export default Component20957;
