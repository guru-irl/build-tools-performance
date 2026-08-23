import React from 'react';
const LABEL_36245 = 'component_36245';
export function Component36245({ value = 36245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36245, 'data-value': derived.doubled }, children);
}
export default Component36245;
