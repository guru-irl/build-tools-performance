import React from 'react';
const LABEL_6915 = 'component_6915';
export function Component6915({ value = 6915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6915, 'data-value': derived.doubled }, children);
}
export default Component6915;
