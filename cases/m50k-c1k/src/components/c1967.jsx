import React from 'react';
const LABEL_1967 = 'component_1967';
export function Component1967({ value = 1967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1967, 'data-value': derived.doubled }, children);
}
export default Component1967;
