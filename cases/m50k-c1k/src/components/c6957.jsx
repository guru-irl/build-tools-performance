import React from 'react';
const LABEL_6957 = 'component_6957';
export function Component6957({ value = 6957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6957, 'data-value': derived.doubled }, children);
}
export default Component6957;
