import React from 'react';
const LABEL_33681 = 'component_33681';
export function Component33681({ value = 33681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33681, 'data-value': derived.doubled }, children);
}
export default Component33681;
