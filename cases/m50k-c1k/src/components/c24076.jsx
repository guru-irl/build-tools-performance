import React from 'react';
const LABEL_24076 = 'component_24076';
export function Component24076({ value = 24076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24076, 'data-value': derived.doubled }, children);
}
export default Component24076;
