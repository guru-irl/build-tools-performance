import React from 'react';
const LABEL_13907 = 'component_13907';
export function Component13907({ value = 13907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13907, 'data-value': derived.doubled }, children);
}
export default Component13907;
