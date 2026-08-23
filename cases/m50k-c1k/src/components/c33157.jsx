import React from 'react';
const LABEL_33157 = 'component_33157';
export function Component33157({ value = 33157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33157, 'data-value': derived.doubled }, children);
}
export default Component33157;
