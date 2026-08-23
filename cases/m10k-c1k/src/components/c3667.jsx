import React from 'react';
const LABEL_3667 = 'component_3667';
export function Component3667({ value = 3667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3667, 'data-value': derived.doubled }, children);
}
export default Component3667;
