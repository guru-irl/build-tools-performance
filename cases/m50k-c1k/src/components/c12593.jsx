import React from 'react';
const LABEL_12593 = 'component_12593';
export function Component12593({ value = 12593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12593, 'data-value': derived.doubled }, children);
}
export default Component12593;
