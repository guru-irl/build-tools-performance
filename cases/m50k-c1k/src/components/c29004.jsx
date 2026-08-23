import React from 'react';
const LABEL_29004 = 'component_29004';
export function Component29004({ value = 29004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29004, 'data-value': derived.doubled }, children);
}
export default Component29004;
