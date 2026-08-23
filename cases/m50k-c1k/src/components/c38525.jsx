import React from 'react';
const LABEL_38525 = 'component_38525';
export function Component38525({ value = 38525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38525, 'data-value': derived.doubled }, children);
}
export default Component38525;
