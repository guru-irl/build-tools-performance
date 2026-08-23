import React from 'react';
const LABEL_39381 = 'component_39381';
export function Component39381({ value = 39381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39381, 'data-value': derived.doubled }, children);
}
export default Component39381;
