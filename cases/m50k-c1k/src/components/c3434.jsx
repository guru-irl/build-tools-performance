import React from 'react';
const LABEL_3434 = 'component_3434';
export function Component3434({ value = 3434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3434, 'data-value': derived.doubled }, children);
}
export default Component3434;
