import React from 'react';
const LABEL_26381 = 'component_26381';
export function Component26381({ value = 26381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26381, 'data-value': derived.doubled }, children);
}
export default Component26381;
