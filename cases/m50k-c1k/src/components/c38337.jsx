import React from 'react';
const LABEL_38337 = 'component_38337';
export function Component38337({ value = 38337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38337, 'data-value': derived.doubled }, children);
}
export default Component38337;
