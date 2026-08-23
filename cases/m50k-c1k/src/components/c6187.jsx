import React from 'react';
const LABEL_6187 = 'component_6187';
export function Component6187({ value = 6187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6187, 'data-value': derived.doubled }, children);
}
export default Component6187;
