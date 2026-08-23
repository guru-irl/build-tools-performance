import React from 'react';
const LABEL_11340 = 'component_11340';
export function Component11340({ value = 11340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11340, 'data-value': derived.doubled }, children);
}
export default Component11340;
