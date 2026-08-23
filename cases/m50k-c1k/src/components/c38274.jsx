import React from 'react';
const LABEL_38274 = 'component_38274';
export function Component38274({ value = 38274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38274, 'data-value': derived.doubled }, children);
}
export default Component38274;
