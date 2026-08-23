import React from 'react';
const LABEL_3043 = 'component_3043';
export function Component3043({ value = 3043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3043, 'data-value': derived.doubled }, children);
}
export default Component3043;
