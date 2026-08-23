import React from 'react';
const LABEL_15709 = 'component_15709';
export function Component15709({ value = 15709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15709, 'data-value': derived.doubled }, children);
}
export default Component15709;
