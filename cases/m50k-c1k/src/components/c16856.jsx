import React from 'react';
const LABEL_16856 = 'component_16856';
export function Component16856({ value = 16856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16856, 'data-value': derived.doubled }, children);
}
export default Component16856;
