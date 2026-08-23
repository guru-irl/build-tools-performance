import React from 'react';
const LABEL_8519 = 'component_8519';
export function Component8519({ value = 8519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8519, 'data-value': derived.doubled }, children);
}
export default Component8519;
