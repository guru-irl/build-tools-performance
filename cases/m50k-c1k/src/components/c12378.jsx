import React from 'react';
const LABEL_12378 = 'component_12378';
export function Component12378({ value = 12378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12378, 'data-value': derived.doubled }, children);
}
export default Component12378;
