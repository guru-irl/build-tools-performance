import React from 'react';
const LABEL_11857 = 'component_11857';
export function Component11857({ value = 11857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11857, 'data-value': derived.doubled }, children);
}
export default Component11857;
