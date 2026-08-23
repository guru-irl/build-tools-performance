import React from 'react';
const LABEL_13502 = 'component_13502';
export function Component13502({ value = 13502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13502, 'data-value': derived.doubled }, children);
}
export default Component13502;
