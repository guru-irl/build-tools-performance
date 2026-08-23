import React from 'react';
const LABEL_25667 = 'component_25667';
export function Component25667({ value = 25667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25667, 'data-value': derived.doubled }, children);
}
export default Component25667;
