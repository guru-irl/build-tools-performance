import React from 'react';
const LABEL_21147 = 'component_21147';
export function Component21147({ value = 21147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21147, 'data-value': derived.doubled }, children);
}
export default Component21147;
