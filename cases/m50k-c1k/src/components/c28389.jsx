import React from 'react';
const LABEL_28389 = 'component_28389';
export function Component28389({ value = 28389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28389, 'data-value': derived.doubled }, children);
}
export default Component28389;
