import React from 'react';
const LABEL_14667 = 'component_14667';
export function Component14667({ value = 14667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14667, 'data-value': derived.doubled }, children);
}
export default Component14667;
