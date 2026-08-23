import React from 'react';
const LABEL_3280 = 'component_3280';
export function Component3280({ value = 3280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3280, 'data-value': derived.doubled }, children);
}
export default Component3280;
