import React from 'react';
const LABEL_42004 = 'component_42004';
export function Component42004({ value = 42004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42004, 'data-value': derived.doubled }, children);
}
export default Component42004;
