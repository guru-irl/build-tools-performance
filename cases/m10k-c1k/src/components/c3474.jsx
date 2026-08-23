import React from 'react';
const LABEL_3474 = 'component_3474';
export function Component3474({ value = 3474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3474, 'data-value': derived.doubled }, children);
}
export default Component3474;
