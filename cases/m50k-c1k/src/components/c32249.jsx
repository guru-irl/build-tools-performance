import React from 'react';
const LABEL_32249 = 'component_32249';
export function Component32249({ value = 32249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32249, 'data-value': derived.doubled }, children);
}
export default Component32249;
