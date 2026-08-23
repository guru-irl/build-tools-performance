import React from 'react';
const LABEL_3525 = 'component_3525';
export function Component3525({ value = 3525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3525, 'data-value': derived.doubled }, children);
}
export default Component3525;
