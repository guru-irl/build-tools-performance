import React from 'react';
const LABEL_22118 = 'component_22118';
export function Component22118({ value = 22118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22118, 'data-value': derived.doubled }, children);
}
export default Component22118;
