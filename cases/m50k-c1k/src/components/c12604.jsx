import React from 'react';
const LABEL_12604 = 'component_12604';
export function Component12604({ value = 12604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12604, 'data-value': derived.doubled }, children);
}
export default Component12604;
