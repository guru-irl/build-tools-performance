import React from 'react';
const LABEL_12623 = 'component_12623';
export function Component12623({ value = 12623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12623, 'data-value': derived.doubled }, children);
}
export default Component12623;
