import React from 'react';
const LABEL_28915 = 'component_28915';
export function Component28915({ value = 28915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28915, 'data-value': derived.doubled }, children);
}
export default Component28915;
