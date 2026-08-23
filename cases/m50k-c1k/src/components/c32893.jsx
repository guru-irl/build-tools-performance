import React from 'react';
const LABEL_32893 = 'component_32893';
export function Component32893({ value = 32893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32893, 'data-value': derived.doubled }, children);
}
export default Component32893;
