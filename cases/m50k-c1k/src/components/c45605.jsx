import React from 'react';
const LABEL_45605 = 'component_45605';
export function Component45605({ value = 45605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45605, 'data-value': derived.doubled }, children);
}
export default Component45605;
