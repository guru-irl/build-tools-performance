import React from 'react';
const LABEL_3967 = 'component_3967';
export function Component3967({ value = 3967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3967, 'data-value': derived.doubled }, children);
}
export default Component3967;
