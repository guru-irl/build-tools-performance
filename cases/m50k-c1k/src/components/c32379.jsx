import React from 'react';
const LABEL_32379 = 'component_32379';
export function Component32379({ value = 32379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32379, 'data-value': derived.doubled }, children);
}
export default Component32379;
