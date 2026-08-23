import React from 'react';
const LABEL_25343 = 'component_25343';
export function Component25343({ value = 25343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25343, 'data-value': derived.doubled }, children);
}
export default Component25343;
