import React from 'react';
const LABEL_35681 = 'component_35681';
export function Component35681({ value = 35681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35681, 'data-value': derived.doubled }, children);
}
export default Component35681;
