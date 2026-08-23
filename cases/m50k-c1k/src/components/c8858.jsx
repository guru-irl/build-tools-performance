import React from 'react';
const LABEL_8858 = 'component_8858';
export function Component8858({ value = 8858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8858, 'data-value': derived.doubled }, children);
}
export default Component8858;
