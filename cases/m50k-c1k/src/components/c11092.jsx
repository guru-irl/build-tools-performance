import React from 'react';
const LABEL_11092 = 'component_11092';
export function Component11092({ value = 11092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11092, 'data-value': derived.doubled }, children);
}
export default Component11092;
