import React from 'react';
const LABEL_24434 = 'component_24434';
export function Component24434({ value = 24434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24434, 'data-value': derived.doubled }, children);
}
export default Component24434;
