import React from 'react';
const LABEL_12337 = 'component_12337';
export function Component12337({ value = 12337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12337, 'data-value': derived.doubled }, children);
}
export default Component12337;
