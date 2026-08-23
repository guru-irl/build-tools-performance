import React from 'react';
const LABEL_33667 = 'component_33667';
export function Component33667({ value = 33667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33667, 'data-value': derived.doubled }, children);
}
export default Component33667;
