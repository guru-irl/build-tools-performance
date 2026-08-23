import React from 'react';
const LABEL_33151 = 'component_33151';
export function Component33151({ value = 33151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33151, 'data-value': derived.doubled }, children);
}
export default Component33151;
