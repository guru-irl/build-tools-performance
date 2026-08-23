import React from 'react';
const LABEL_13280 = 'component_13280';
export function Component13280({ value = 13280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13280, 'data-value': derived.doubled }, children);
}
export default Component13280;
