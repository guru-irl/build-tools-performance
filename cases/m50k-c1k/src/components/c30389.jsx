import React from 'react';
const LABEL_30389 = 'component_30389';
export function Component30389({ value = 30389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30389, 'data-value': derived.doubled }, children);
}
export default Component30389;
