import React from 'react';
const LABEL_36915 = 'component_36915';
export function Component36915({ value = 36915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36915, 'data-value': derived.doubled }, children);
}
export default Component36915;
