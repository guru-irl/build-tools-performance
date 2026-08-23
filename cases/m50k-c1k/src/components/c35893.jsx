import React from 'react';
const LABEL_35893 = 'component_35893';
export function Component35893({ value = 35893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35893, 'data-value': derived.doubled }, children);
}
export default Component35893;
