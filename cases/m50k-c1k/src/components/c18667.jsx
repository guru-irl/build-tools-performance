import React from 'react';
const LABEL_18667 = 'component_18667';
export function Component18667({ value = 18667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18667, 'data-value': derived.doubled }, children);
}
export default Component18667;
