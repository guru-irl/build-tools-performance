import React from 'react';
const LABEL_25654 = 'component_25654';
export function Component25654({ value = 25654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25654, 'data-value': derived.doubled }, children);
}
export default Component25654;
