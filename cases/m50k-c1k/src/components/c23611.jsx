import React from 'react';
const LABEL_23611 = 'component_23611';
export function Component23611({ value = 23611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23611, 'data-value': derived.doubled }, children);
}
export default Component23611;
