import React from 'react';
const LABEL_38389 = 'component_38389';
export function Component38389({ value = 38389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38389, 'data-value': derived.doubled }, children);
}
export default Component38389;
