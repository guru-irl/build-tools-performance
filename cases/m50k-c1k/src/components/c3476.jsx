import React from 'react';
const LABEL_3476 = 'component_3476';
export function Component3476({ value = 3476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3476, 'data-value': derived.doubled }, children);
}
export default Component3476;
