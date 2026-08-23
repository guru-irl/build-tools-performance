import React from 'react';
const LABEL_24548 = 'component_24548';
export function Component24548({ value = 24548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24548, 'data-value': derived.doubled }, children);
}
export default Component24548;
