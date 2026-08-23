import React from 'react';
const LABEL_35915 = 'component_35915';
export function Component35915({ value = 35915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35915, 'data-value': derived.doubled }, children);
}
export default Component35915;
