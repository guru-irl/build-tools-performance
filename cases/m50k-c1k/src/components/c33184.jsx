import React from 'react';
const LABEL_33184 = 'component_33184';
export function Component33184({ value = 33184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33184, 'data-value': derived.doubled }, children);
}
export default Component33184;
