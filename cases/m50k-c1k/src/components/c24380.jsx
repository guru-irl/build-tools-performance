import React from 'react';
const LABEL_24380 = 'component_24380';
export function Component24380({ value = 24380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24380, 'data-value': derived.doubled }, children);
}
export default Component24380;
