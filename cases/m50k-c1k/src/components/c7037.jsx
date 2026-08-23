import React from 'react';
const LABEL_7037 = 'component_7037';
export function Component7037({ value = 7037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7037, 'data-value': derived.doubled }, children);
}
export default Component7037;
