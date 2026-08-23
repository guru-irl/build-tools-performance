import React from 'react';
const LABEL_11667 = 'component_11667';
export function Component11667({ value = 11667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11667, 'data-value': derived.doubled }, children);
}
export default Component11667;
