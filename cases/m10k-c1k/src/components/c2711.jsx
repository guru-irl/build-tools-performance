import React from 'react';
const LABEL_2711 = 'component_2711';
export function Component2711({ value = 2711, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2711, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2711, 'data-value': derived.doubled }, children);
}
export default Component2711;
