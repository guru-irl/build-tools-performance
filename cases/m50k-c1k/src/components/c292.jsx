import React from 'react';
const LABEL_292 = 'component_292';
export function Component292({ value = 292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_292, 'data-value': derived.doubled }, children);
}
export default Component292;
