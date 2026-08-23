import React from 'react';
const LABEL_3856 = 'component_3856';
export function Component3856({ value = 3856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3856, 'data-value': derived.doubled }, children);
}
export default Component3856;
