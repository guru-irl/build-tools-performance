import React from 'react';
const LABEL_21738 = 'component_21738';
export function Component21738({ value = 21738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21738, 'data-value': derived.doubled }, children);
}
export default Component21738;
