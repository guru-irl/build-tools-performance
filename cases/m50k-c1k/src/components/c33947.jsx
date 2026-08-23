import React from 'react';
const LABEL_33947 = 'component_33947';
export function Component33947({ value = 33947, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33947, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33947, 'data-value': derived.doubled }, children);
}
export default Component33947;
