import React from 'react';
const LABEL_15381 = 'component_15381';
export function Component15381({ value = 15381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15381, 'data-value': derived.doubled }, children);
}
export default Component15381;
