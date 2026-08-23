import React from 'react';
const LABEL_12548 = 'component_12548';
export function Component12548({ value = 12548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12548, 'data-value': derived.doubled }, children);
}
export default Component12548;
