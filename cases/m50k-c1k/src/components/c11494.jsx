import React from 'react';
const LABEL_11494 = 'component_11494';
export function Component11494({ value = 11494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11494, 'data-value': derived.doubled }, children);
}
export default Component11494;
