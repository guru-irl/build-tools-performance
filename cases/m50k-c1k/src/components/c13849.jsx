import React from 'react';
const LABEL_13849 = 'component_13849';
export function Component13849({ value = 13849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13849, 'data-value': derived.doubled }, children);
}
export default Component13849;
