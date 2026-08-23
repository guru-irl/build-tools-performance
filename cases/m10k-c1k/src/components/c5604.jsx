import React from 'react';
const LABEL_5604 = 'component_5604';
export function Component5604({ value = 5604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5604, 'data-value': derived.doubled }, children);
}
export default Component5604;
