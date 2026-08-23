import React from 'react';
const LABEL_12311 = 'component_12311';
export function Component12311({ value = 12311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12311, 'data-value': derived.doubled }, children);
}
export default Component12311;
