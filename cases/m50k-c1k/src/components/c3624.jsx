import React from 'react';
const LABEL_3624 = 'component_3624';
export function Component3624({ value = 3624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3624, 'data-value': derived.doubled }, children);
}
export default Component3624;
