import React from 'react';
const LABEL_10389 = 'component_10389';
export function Component10389({ value = 10389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10389, 'data-value': derived.doubled }, children);
}
export default Component10389;
