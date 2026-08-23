import React from 'react';
const LABEL_381 = 'component_381';
export function Component381({ value = 381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_381, 'data-value': derived.doubled }, children);
}
export default Component381;
