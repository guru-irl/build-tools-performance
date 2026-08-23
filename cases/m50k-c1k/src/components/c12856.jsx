import React from 'react';
const LABEL_12856 = 'component_12856';
export function Component12856({ value = 12856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12856, 'data-value': derived.doubled }, children);
}
export default Component12856;
