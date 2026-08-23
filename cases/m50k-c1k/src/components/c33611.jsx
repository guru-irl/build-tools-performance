import React from 'react';
const LABEL_33611 = 'component_33611';
export function Component33611({ value = 33611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33611, 'data-value': derived.doubled }, children);
}
export default Component33611;
