import React from 'react';
const LABEL_37653 = 'component_37653';
export function Component37653({ value = 37653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37653, 'data-value': derived.doubled }, children);
}
export default Component37653;
