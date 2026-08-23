import React from 'react';
const LABEL_3047 = 'component_3047';
export function Component3047({ value = 3047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3047, 'data-value': derived.doubled }, children);
}
export default Component3047;
