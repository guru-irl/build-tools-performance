import React from 'react';
const LABEL_46398 = 'component_46398';
export function Component46398({ value = 46398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46398, 'data-value': derived.doubled }, children);
}
export default Component46398;
