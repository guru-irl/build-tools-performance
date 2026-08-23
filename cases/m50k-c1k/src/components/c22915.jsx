import React from 'react';
const LABEL_22915 = 'component_22915';
export function Component22915({ value = 22915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22915, 'data-value': derived.doubled }, children);
}
export default Component22915;
