import React from 'react';
const LABEL_21079 = 'component_21079';
export function Component21079({ value = 21079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21079, 'data-value': derived.doubled }, children);
}
export default Component21079;
