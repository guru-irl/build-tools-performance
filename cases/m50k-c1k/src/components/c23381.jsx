import React from 'react';
const LABEL_23381 = 'component_23381';
export function Component23381({ value = 23381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23381, 'data-value': derived.doubled }, children);
}
export default Component23381;
