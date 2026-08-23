import React from 'react';
const LABEL_31667 = 'component_31667';
export function Component31667({ value = 31667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31667, 'data-value': derived.doubled }, children);
}
export default Component31667;
