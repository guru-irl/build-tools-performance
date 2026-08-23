import React from 'react';
const LABEL_35533 = 'component_35533';
export function Component35533({ value = 35533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35533, 'data-value': derived.doubled }, children);
}
export default Component35533;
