import React from 'react';
const LABEL_21531 = 'component_21531';
export function Component21531({ value = 21531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21531, 'data-value': derived.doubled }, children);
}
export default Component21531;
