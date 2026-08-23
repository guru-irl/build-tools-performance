import React from 'react';
const LABEL_11047 = 'component_11047';
export function Component11047({ value = 11047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11047, 'data-value': derived.doubled }, children);
}
export default Component11047;
