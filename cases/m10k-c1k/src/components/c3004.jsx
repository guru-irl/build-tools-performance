import React from 'react';
const LABEL_3004 = 'component_3004';
export function Component3004({ value = 3004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3004, 'data-value': derived.doubled }, children);
}
export default Component3004;
