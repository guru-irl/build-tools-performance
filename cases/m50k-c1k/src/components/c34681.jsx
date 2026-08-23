import React from 'react';
const LABEL_34681 = 'component_34681';
export function Component34681({ value = 34681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34681, 'data-value': derived.doubled }, children);
}
export default Component34681;
