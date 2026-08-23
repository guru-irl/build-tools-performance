import React from 'react';
const LABEL_23087 = 'component_23087';
export function Component23087({ value = 23087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23087, 'data-value': derived.doubled }, children);
}
export default Component23087;
