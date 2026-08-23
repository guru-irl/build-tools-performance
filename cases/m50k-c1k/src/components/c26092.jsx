import React from 'react';
const LABEL_26092 = 'component_26092';
export function Component26092({ value = 26092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26092, 'data-value': derived.doubled }, children);
}
export default Component26092;
