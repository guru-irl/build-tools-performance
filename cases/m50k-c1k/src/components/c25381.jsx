import React from 'react';
const LABEL_25381 = 'component_25381';
export function Component25381({ value = 25381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25381, 'data-value': derived.doubled }, children);
}
export default Component25381;
