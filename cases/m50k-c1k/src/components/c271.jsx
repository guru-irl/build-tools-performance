import React from 'react';
const LABEL_271 = 'component_271';
export function Component271({ value = 271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_271, 'data-value': derived.doubled }, children);
}
export default Component271;
