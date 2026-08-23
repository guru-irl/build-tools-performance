import React from 'react';
const LABEL_13389 = 'component_13389';
export function Component13389({ value = 13389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13389, 'data-value': derived.doubled }, children);
}
export default Component13389;
