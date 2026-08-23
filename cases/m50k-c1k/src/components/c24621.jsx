import React from 'react';
const LABEL_24621 = 'component_24621';
export function Component24621({ value = 24621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24621, 'data-value': derived.doubled }, children);
}
export default Component24621;
