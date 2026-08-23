import React from 'react';
const LABEL_12129 = 'component_12129';
export function Component12129({ value = 12129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12129, 'data-value': derived.doubled }, children);
}
export default Component12129;
