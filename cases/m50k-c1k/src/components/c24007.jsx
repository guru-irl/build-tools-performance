import React from 'react';
const LABEL_24007 = 'component_24007';
export function Component24007({ value = 24007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24007, 'data-value': derived.doubled }, children);
}
export default Component24007;
