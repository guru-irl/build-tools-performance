import React from 'react';
const LABEL_7742 = 'component_7742';
export function Component7742({ value = 7742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7742, 'data-value': derived.doubled }, children);
}
export default Component7742;
