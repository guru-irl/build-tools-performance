import React from 'react';
const LABEL_12663 = 'component_12663';
export function Component12663({ value = 12663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12663, 'data-value': derived.doubled }, children);
}
export default Component12663;
