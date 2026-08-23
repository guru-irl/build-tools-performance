import React from 'react';
const LABEL_12624 = 'component_12624';
export function Component12624({ value = 12624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12624, 'data-value': derived.doubled }, children);
}
export default Component12624;
