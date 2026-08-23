import React from 'react';
const LABEL_10491 = 'component_10491';
export function Component10491({ value = 10491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10491, 'data-value': derived.doubled }, children);
}
export default Component10491;
