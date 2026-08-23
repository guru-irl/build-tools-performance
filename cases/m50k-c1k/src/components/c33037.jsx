import React from 'react';
const LABEL_33037 = 'component_33037';
export function Component33037({ value = 33037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33037, 'data-value': derived.doubled }, children);
}
export default Component33037;
