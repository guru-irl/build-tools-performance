import React from 'react';
const LABEL_24708 = 'component_24708';
export function Component24708({ value = 24708, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24708, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24708, 'data-value': derived.doubled }, children);
}
export default Component24708;
