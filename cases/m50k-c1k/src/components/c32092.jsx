import React from 'react';
const LABEL_32092 = 'component_32092';
export function Component32092({ value = 32092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32092, 'data-value': derived.doubled }, children);
}
export default Component32092;
