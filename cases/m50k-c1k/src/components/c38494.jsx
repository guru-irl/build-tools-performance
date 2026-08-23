import React from 'react';
const LABEL_38494 = 'component_38494';
export function Component38494({ value = 38494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38494, 'data-value': derived.doubled }, children);
}
export default Component38494;
