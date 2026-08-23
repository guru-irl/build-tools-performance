import React from 'react';
const LABEL_27957 = 'component_27957';
export function Component27957({ value = 27957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27957, 'data-value': derived.doubled }, children);
}
export default Component27957;
