import React from 'react';
const LABEL_33292 = 'component_33292';
export function Component33292({ value = 33292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33292, 'data-value': derived.doubled }, children);
}
export default Component33292;
