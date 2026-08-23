import React from 'react';
const LABEL_23434 = 'component_23434';
export function Component23434({ value = 23434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23434, 'data-value': derived.doubled }, children);
}
export default Component23434;
