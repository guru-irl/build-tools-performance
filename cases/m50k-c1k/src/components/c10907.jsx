import React from 'react';
const LABEL_10907 = 'component_10907';
export function Component10907({ value = 10907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10907, 'data-value': derived.doubled }, children);
}
export default Component10907;
