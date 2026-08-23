import React from 'react';
const LABEL_12456 = 'component_12456';
export function Component12456({ value = 12456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12456, 'data-value': derived.doubled }, children);
}
export default Component12456;
