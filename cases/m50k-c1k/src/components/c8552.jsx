import React from 'react';
const LABEL_8552 = 'component_8552';
export function Component8552({ value = 8552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8552, 'data-value': derived.doubled }, children);
}
export default Component8552;
