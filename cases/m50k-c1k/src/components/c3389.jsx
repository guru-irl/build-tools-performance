import React from 'react';
const LABEL_3389 = 'component_3389';
export function Component3389({ value = 3389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3389, 'data-value': derived.doubled }, children);
}
export default Component3389;
