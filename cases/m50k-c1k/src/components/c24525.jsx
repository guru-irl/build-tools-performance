import React from 'react';
const LABEL_24525 = 'component_24525';
export function Component24525({ value = 24525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24525, 'data-value': derived.doubled }, children);
}
export default Component24525;
