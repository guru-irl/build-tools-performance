import React from 'react';
const LABEL_21087 = 'component_21087';
export function Component21087({ value = 21087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21087, 'data-value': derived.doubled }, children);
}
export default Component21087;
