import React from 'react';
const LABEL_3381 = 'component_3381';
export function Component3381({ value = 3381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3381, 'data-value': derived.doubled }, children);
}
export default Component3381;
