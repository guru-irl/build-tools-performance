import React from 'react';
const LABEL_22271 = 'component_22271';
export function Component22271({ value = 22271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22271, 'data-value': derived.doubled }, children);
}
export default Component22271;
