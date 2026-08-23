import React from 'react';
const LABEL_33358 = 'component_33358';
export function Component33358({ value = 33358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33358, 'data-value': derived.doubled }, children);
}
export default Component33358;
