import React from 'react';
const LABEL_32330 = 'component_32330';
export function Component32330({ value = 32330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32330, 'data-value': derived.doubled }, children);
}
export default Component32330;
