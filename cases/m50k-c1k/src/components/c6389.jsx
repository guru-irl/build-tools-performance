import React from 'react';
const LABEL_6389 = 'component_6389';
export function Component6389({ value = 6389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6389, 'data-value': derived.doubled }, children);
}
export default Component6389;
