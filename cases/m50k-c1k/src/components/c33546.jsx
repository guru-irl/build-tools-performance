import React from 'react';
const LABEL_33546 = 'component_33546';
export function Component33546({ value = 33546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33546, 'data-value': derived.doubled }, children);
}
export default Component33546;
