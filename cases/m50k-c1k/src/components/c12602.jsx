import React from 'react';
const LABEL_12602 = 'component_12602';
export function Component12602({ value = 12602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12602, 'data-value': derived.doubled }, children);
}
export default Component12602;
