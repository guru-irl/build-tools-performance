import React from 'react';
const LABEL_39907 = 'component_39907';
export function Component39907({ value = 39907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39907, 'data-value': derived.doubled }, children);
}
export default Component39907;
