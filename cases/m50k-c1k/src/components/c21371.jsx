import React from 'react';
const LABEL_21371 = 'component_21371';
export function Component21371({ value = 21371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21371, 'data-value': derived.doubled }, children);
}
export default Component21371;
