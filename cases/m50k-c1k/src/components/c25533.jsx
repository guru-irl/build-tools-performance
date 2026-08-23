import React from 'react';
const LABEL_25533 = 'component_25533';
export function Component25533({ value = 25533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25533, 'data-value': derived.doubled }, children);
}
export default Component25533;
