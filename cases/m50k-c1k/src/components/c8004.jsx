import React from 'react';
const LABEL_8004 = 'component_8004';
export function Component8004({ value = 8004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8004, 'data-value': derived.doubled }, children);
}
export default Component8004;
