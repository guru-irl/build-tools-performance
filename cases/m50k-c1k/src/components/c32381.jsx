import React from 'react';
const LABEL_32381 = 'component_32381';
export function Component32381({ value = 32381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32381, 'data-value': derived.doubled }, children);
}
export default Component32381;
