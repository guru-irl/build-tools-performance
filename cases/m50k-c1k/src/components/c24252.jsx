import React from 'react';
const LABEL_24252 = 'component_24252';
export function Component24252({ value = 24252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24252, 'data-value': derived.doubled }, children);
}
export default Component24252;
