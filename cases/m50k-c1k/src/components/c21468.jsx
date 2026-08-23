import React from 'react';
const LABEL_21468 = 'component_21468';
export function Component21468({ value = 21468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21468, 'data-value': derived.doubled }, children);
}
export default Component21468;
