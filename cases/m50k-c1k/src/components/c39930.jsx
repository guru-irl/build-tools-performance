import React from 'react';
const LABEL_39930 = 'component_39930';
export function Component39930({ value = 39930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39930, 'data-value': derived.doubled }, children);
}
export default Component39930;
