import React from 'react';
const LABEL_33396 = 'component_33396';
export function Component33396({ value = 33396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33396, 'data-value': derived.doubled }, children);
}
export default Component33396;
