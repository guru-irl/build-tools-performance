import React from 'react';
const LABEL_14932 = 'component_14932';
export function Component14932({ value = 14932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14932, 'data-value': derived.doubled }, children);
}
export default Component14932;
