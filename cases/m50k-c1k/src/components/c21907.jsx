import React from 'react';
const LABEL_21907 = 'component_21907';
export function Component21907({ value = 21907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21907, 'data-value': derived.doubled }, children);
}
export default Component21907;
