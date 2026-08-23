import React from 'react';
const LABEL_14280 = 'component_14280';
export function Component14280({ value = 14280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14280, 'data-value': derived.doubled }, children);
}
export default Component14280;
