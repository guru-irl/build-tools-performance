import React from 'react';
const LABEL_31750 = 'component_31750';
export function Component31750({ value = 31750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31750, 'data-value': derived.doubled }, children);
}
export default Component31750;
