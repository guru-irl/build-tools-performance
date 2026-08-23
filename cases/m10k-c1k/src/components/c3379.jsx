import React from 'react';
const LABEL_3379 = 'component_3379';
export function Component3379({ value = 3379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3379, 'data-value': derived.doubled }, children);
}
export default Component3379;
