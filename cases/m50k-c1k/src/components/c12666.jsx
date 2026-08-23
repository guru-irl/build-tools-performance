import React from 'react';
const LABEL_12666 = 'component_12666';
export function Component12666({ value = 12666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12666, 'data-value': derived.doubled }, children);
}
export default Component12666;
