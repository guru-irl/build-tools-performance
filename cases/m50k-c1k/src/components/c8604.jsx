import React from 'react';
const LABEL_8604 = 'component_8604';
export function Component8604({ value = 8604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8604, 'data-value': derived.doubled }, children);
}
export default Component8604;
