import React from 'react';
const LABEL_23490 = 'component_23490';
export function Component23490({ value = 23490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23490, 'data-value': derived.doubled }, children);
}
export default Component23490;
