import React from 'react';
const LABEL_12283 = 'component_12283';
export function Component12283({ value = 12283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12283, 'data-value': derived.doubled }, children);
}
export default Component12283;
