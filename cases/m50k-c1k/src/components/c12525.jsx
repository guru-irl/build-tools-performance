import React from 'react';
const LABEL_12525 = 'component_12525';
export function Component12525({ value = 12525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12525, 'data-value': derived.doubled }, children);
}
export default Component12525;
