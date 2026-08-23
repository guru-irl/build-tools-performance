import React from 'react';
const LABEL_6092 = 'component_6092';
export function Component6092({ value = 6092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6092, 'data-value': derived.doubled }, children);
}
export default Component6092;
