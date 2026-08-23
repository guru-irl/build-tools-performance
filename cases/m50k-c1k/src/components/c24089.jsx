import React from 'react';
const LABEL_24089 = 'component_24089';
export function Component24089({ value = 24089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24089, 'data-value': derived.doubled }, children);
}
export default Component24089;
