import React from 'react';
const LABEL_389 = 'component_389';
export function Component389({ value = 389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_389, 'data-value': derived.doubled }, children);
}
export default Component389;
