import React from 'react';
const LABEL_8389 = 'component_8389';
export function Component8389({ value = 8389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8389, 'data-value': derived.doubled }, children);
}
export default Component8389;
