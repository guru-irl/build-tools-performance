import React from 'react';
const LABEL_12198 = 'component_12198';
export function Component12198({ value = 12198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12198, 'data-value': derived.doubled }, children);
}
export default Component12198;
