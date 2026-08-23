import React from 'react';
const LABEL_667 = 'component_667';
export function Component667({ value = 667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_667, 'data-value': derived.doubled }, children);
}
export default Component667;
