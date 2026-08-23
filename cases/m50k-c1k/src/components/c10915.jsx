import React from 'react';
const LABEL_10915 = 'component_10915';
export function Component10915({ value = 10915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10915, 'data-value': derived.doubled }, children);
}
export default Component10915;
