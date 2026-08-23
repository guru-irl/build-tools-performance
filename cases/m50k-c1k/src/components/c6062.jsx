import React from 'react';
const LABEL_6062 = 'component_6062';
export function Component6062({ value = 6062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6062, 'data-value': derived.doubled }, children);
}
export default Component6062;
