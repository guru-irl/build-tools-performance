import React from 'react';
const LABEL_23092 = 'component_23092';
export function Component23092({ value = 23092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23092, 'data-value': derived.doubled }, children);
}
export default Component23092;
