import React from 'react';
const LABEL_12125 = 'component_12125';
export function Component12125({ value = 12125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12125, 'data-value': derived.doubled }, children);
}
export default Component12125;
