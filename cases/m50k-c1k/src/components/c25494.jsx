import React from 'react';
const LABEL_25494 = 'component_25494';
export function Component25494({ value = 25494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25494, 'data-value': derived.doubled }, children);
}
export default Component25494;
