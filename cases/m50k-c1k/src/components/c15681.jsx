import React from 'react';
const LABEL_15681 = 'component_15681';
export function Component15681({ value = 15681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15681, 'data-value': derived.doubled }, children);
}
export default Component15681;
