import React from 'react';
const LABEL_21181 = 'component_21181';
export function Component21181({ value = 21181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21181, 'data-value': derived.doubled }, children);
}
export default Component21181;
