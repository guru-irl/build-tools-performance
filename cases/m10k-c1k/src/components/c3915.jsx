import React from 'react';
const LABEL_3915 = 'component_3915';
export function Component3915({ value = 3915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3915, 'data-value': derived.doubled }, children);
}
export default Component3915;
