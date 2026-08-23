import React from 'react';
const LABEL_681 = 'component_681';
export function Component681({ value = 681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_681, 'data-value': derived.doubled }, children);
}
export default Component681;
