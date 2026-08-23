import React from 'react';
const LABEL_28907 = 'component_28907';
export function Component28907({ value = 28907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28907, 'data-value': derived.doubled }, children);
}
export default Component28907;
