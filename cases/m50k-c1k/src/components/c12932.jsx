import React from 'react';
const LABEL_12932 = 'component_12932';
export function Component12932({ value = 12932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12932, 'data-value': derived.doubled }, children);
}
export default Component12932;
