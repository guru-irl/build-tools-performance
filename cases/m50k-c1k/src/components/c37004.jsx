import React from 'react';
const LABEL_37004 = 'component_37004';
export function Component37004({ value = 37004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37004, 'data-value': derived.doubled }, children);
}
export default Component37004;
