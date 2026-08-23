import React from 'react';
const LABEL_31481 = 'component_31481';
export function Component31481({ value = 31481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31481, 'data-value': derived.doubled }, children);
}
export default Component31481;
