import React from 'react';
const LABEL_10265 = 'component_10265';
export function Component10265({ value = 10265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10265, 'data-value': derived.doubled }, children);
}
export default Component10265;
