import React from 'react';
const LABEL_3374 = 'component_3374';
export function Component3374({ value = 3374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3374, 'data-value': derived.doubled }, children);
}
export default Component3374;
