import React from 'react';
const LABEL_37997 = 'component_37997';
export function Component37997({ value = 37997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37997, 'data-value': derived.doubled }, children);
}
export default Component37997;
