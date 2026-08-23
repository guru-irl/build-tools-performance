import React from 'react';
const LABEL_21403 = 'component_21403';
export function Component21403({ value = 21403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21403, 'data-value': derived.doubled }, children);
}
export default Component21403;
