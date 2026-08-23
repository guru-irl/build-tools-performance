import React from 'react';
const LABEL_12496 = 'component_12496';
export function Component12496({ value = 12496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12496, 'data-value': derived.doubled }, children);
}
export default Component12496;
