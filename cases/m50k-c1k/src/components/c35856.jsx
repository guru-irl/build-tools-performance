import React from 'react';
const LABEL_35856 = 'component_35856';
export function Component35856({ value = 35856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35856, 'data-value': derived.doubled }, children);
}
export default Component35856;
