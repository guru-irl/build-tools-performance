import React from 'react';
const LABEL_12088 = 'component_12088';
export function Component12088({ value = 12088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12088, 'data-value': derived.doubled }, children);
}
export default Component12088;
