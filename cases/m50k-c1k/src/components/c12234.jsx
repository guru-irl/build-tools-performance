import React from 'react';
const LABEL_12234 = 'component_12234';
export function Component12234({ value = 12234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12234, 'data-value': derived.doubled }, children);
}
export default Component12234;
