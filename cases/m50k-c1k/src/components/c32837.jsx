import React from 'react';
const LABEL_32837 = 'component_32837';
export function Component32837({ value = 32837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32837, 'data-value': derived.doubled }, children);
}
export default Component32837;
