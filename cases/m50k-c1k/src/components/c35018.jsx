import React from 'react';
const LABEL_35018 = 'component_35018';
export function Component35018({ value = 35018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35018, 'data-value': derived.doubled }, children);
}
export default Component35018;
