import React from 'react';
const LABEL_32907 = 'component_32907';
export function Component32907({ value = 32907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32907, 'data-value': derived.doubled }, children);
}
export default Component32907;
