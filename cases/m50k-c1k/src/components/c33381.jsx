import React from 'react';
const LABEL_33381 = 'component_33381';
export function Component33381({ value = 33381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33381, 'data-value': derived.doubled }, children);
}
export default Component33381;
