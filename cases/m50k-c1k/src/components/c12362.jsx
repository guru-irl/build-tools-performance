import React from 'react';
const LABEL_12362 = 'component_12362';
export function Component12362({ value = 12362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12362, 'data-value': derived.doubled }, children);
}
export default Component12362;
