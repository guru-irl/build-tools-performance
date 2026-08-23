import React from 'react';
const LABEL_33187 = 'component_33187';
export function Component33187({ value = 33187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33187, 'data-value': derived.doubled }, children);
}
export default Component33187;
