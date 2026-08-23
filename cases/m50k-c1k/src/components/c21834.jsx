import React from 'react';
const LABEL_21834 = 'component_21834';
export function Component21834({ value = 21834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21834, 'data-value': derived.doubled }, children);
}
export default Component21834;
