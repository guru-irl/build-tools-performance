import React from 'react';
const LABEL_36667 = 'component_36667';
export function Component36667({ value = 36667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36667, 'data-value': derived.doubled }, children);
}
export default Component36667;
