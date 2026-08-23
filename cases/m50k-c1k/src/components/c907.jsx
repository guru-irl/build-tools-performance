import React from 'react';
const LABEL_907 = 'component_907';
export function Component907({ value = 907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_907, 'data-value': derived.doubled }, children);
}
export default Component907;
