import React from 'react';
const LABEL_37494 = 'component_37494';
export function Component37494({ value = 37494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37494, 'data-value': derived.doubled }, children);
}
export default Component37494;
