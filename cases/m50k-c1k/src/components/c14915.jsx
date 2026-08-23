import React from 'react';
const LABEL_14915 = 'component_14915';
export function Component14915({ value = 14915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14915, 'data-value': derived.doubled }, children);
}
export default Component14915;
