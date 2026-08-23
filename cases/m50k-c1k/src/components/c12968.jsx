import React from 'react';
const LABEL_12968 = 'component_12968';
export function Component12968({ value = 12968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12968, 'data-value': derived.doubled }, children);
}
export default Component12968;
