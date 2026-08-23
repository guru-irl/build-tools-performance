import React from 'react';
const LABEL_15490 = 'component_15490';
export function Component15490({ value = 15490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15490, 'data-value': derived.doubled }, children);
}
export default Component15490;
