import React from 'react';
const LABEL_24372 = 'component_24372';
export function Component24372({ value = 24372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24372, 'data-value': derived.doubled }, children);
}
export default Component24372;
