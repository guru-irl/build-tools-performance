import React from 'react';
const LABEL_45809 = 'component_45809';
export function Component45809({ value = 45809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45809, 'data-value': derived.doubled }, children);
}
export default Component45809;
