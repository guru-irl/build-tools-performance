import React from 'react';
const LABEL_20893 = 'component_20893';
export function Component20893({ value = 20893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20893, 'data-value': derived.doubled }, children);
}
export default Component20893;
