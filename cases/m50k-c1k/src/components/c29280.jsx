import React from 'react';
const LABEL_29280 = 'component_29280';
export function Component29280({ value = 29280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29280, 'data-value': derived.doubled }, children);
}
export default Component29280;
