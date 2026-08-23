import React from 'react';
const LABEL_26398 = 'component_26398';
export function Component26398({ value = 26398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26398, 'data-value': derived.doubled }, children);
}
export default Component26398;
