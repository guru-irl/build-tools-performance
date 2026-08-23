import React from 'react';
const LABEL_23043 = 'component_23043';
export function Component23043({ value = 23043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23043, 'data-value': derived.doubled }, children);
}
export default Component23043;
