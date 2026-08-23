import React from 'react';
const LABEL_21681 = 'component_21681';
export function Component21681({ value = 21681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21681, 'data-value': derived.doubled }, children);
}
export default Component21681;
