import React from 'react';
const LABEL_264 = 'component_264';
export function Component264({ value = 264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_264, 'data-value': derived.doubled }, children);
}
export default Component264;
