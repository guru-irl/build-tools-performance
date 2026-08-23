import React from 'react';
const LABEL_29915 = 'component_29915';
export function Component29915({ value = 29915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29915, 'data-value': derived.doubled }, children);
}
export default Component29915;
