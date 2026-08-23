import React from 'react';
const LABEL_40907 = 'component_40907';
export function Component40907({ value = 40907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40907, 'data-value': derived.doubled }, children);
}
export default Component40907;
