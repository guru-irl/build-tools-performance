import React from 'react';
const LABEL_29047 = 'component_29047';
export function Component29047({ value = 29047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29047, 'data-value': derived.doubled }, children);
}
export default Component29047;
