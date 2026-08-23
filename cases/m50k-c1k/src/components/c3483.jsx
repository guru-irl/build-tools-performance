import React from 'react';
const LABEL_3483 = 'component_3483';
export function Component3483({ value = 3483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3483, 'data-value': derived.doubled }, children);
}
export default Component3483;
