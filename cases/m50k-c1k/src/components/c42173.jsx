import React from 'react';
const LABEL_42173 = 'component_42173';
export function Component42173({ value = 42173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42173, 'data-value': derived.doubled }, children);
}
export default Component42173;
