import React from 'react';
const LABEL_25065 = 'component_25065';
export function Component25065({ value = 25065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25065, 'data-value': derived.doubled }, children);
}
export default Component25065;
