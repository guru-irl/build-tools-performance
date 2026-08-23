import React from 'react';
const LABEL_12468 = 'component_12468';
export function Component12468({ value = 12468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12468, 'data-value': derived.doubled }, children);
}
export default Component12468;
