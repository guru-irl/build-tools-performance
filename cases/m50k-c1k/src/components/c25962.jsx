import React from 'react';
const LABEL_25962 = 'component_25962';
export function Component25962({ value = 25962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25962, 'data-value': derived.doubled }, children);
}
export default Component25962;
