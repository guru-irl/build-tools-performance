import React from 'react';
const LABEL_109 = 'component_109';
export function Component109({ value = 109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_109, 'data-value': derived.doubled }, children);
}
export default Component109;
