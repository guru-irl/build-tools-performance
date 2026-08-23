import React from 'react';
const LABEL_22381 = 'component_22381';
export function Component22381({ value = 22381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22381, 'data-value': derived.doubled }, children);
}
export default Component22381;
