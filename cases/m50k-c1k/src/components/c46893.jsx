import React from 'react';
const LABEL_46893 = 'component_46893';
export function Component46893({ value = 46893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46893, 'data-value': derived.doubled }, children);
}
export default Component46893;
