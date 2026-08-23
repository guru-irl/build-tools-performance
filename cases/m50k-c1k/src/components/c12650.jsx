import React from 'react';
const LABEL_12650 = 'component_12650';
export function Component12650({ value = 12650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12650, 'data-value': derived.doubled }, children);
}
export default Component12650;
