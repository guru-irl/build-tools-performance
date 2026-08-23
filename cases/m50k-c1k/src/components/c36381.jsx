import React from 'react';
const LABEL_36381 = 'component_36381';
export function Component36381({ value = 36381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36381, 'data-value': derived.doubled }, children);
}
export default Component36381;
