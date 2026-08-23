import React from 'react';
const LABEL_4915 = 'component_4915';
export function Component4915({ value = 4915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4915, 'data-value': derived.doubled }, children);
}
export default Component4915;
