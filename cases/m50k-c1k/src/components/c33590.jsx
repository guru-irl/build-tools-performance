import React from 'react';
const LABEL_33590 = 'component_33590';
export function Component33590({ value = 33590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33590, 'data-value': derived.doubled }, children);
}
export default Component33590;
