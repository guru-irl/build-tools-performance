import React from 'react';
const LABEL_12381 = 'component_12381';
export function Component12381({ value = 12381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12381, 'data-value': derived.doubled }, children);
}
export default Component12381;
