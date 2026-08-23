import React from 'react';
const LABEL_3609 = 'component_3609';
export function Component3609({ value = 3609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3609, 'data-value': derived.doubled }, children);
}
export default Component3609;
