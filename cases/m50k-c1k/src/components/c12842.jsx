import React from 'react';
const LABEL_12842 = 'component_12842';
export function Component12842({ value = 12842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12842, 'data-value': derived.doubled }, children);
}
export default Component12842;
