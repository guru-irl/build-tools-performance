import React from 'react';
const LABEL_37506 = 'component_37506';
export function Component37506({ value = 37506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37506, 'data-value': derived.doubled }, children);
}
export default Component37506;
