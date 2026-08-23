import React from 'react';
const LABEL_24092 = 'component_24092';
export function Component24092({ value = 24092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24092, 'data-value': derived.doubled }, children);
}
export default Component24092;
