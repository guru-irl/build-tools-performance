import React from 'react';
const LABEL_12504 = 'component_12504';
export function Component12504({ value = 12504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12504, 'data-value': derived.doubled }, children);
}
export default Component12504;
