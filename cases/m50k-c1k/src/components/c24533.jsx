import React from 'react';
const LABEL_24533 = 'component_24533';
export function Component24533({ value = 24533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24533, 'data-value': derived.doubled }, children);
}
export default Component24533;
