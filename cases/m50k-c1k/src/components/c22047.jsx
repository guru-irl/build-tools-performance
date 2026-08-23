import React from 'react';
const LABEL_22047 = 'component_22047';
export function Component22047({ value = 22047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22047, 'data-value': derived.doubled }, children);
}
export default Component22047;
