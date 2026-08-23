import React from 'react';
const LABEL_24630 = 'component_24630';
export function Component24630({ value = 24630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24630, 'data-value': derived.doubled }, children);
}
export default Component24630;
