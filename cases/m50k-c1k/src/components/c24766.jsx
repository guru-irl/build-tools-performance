import React from 'react';
const LABEL_24766 = 'component_24766';
export function Component24766({ value = 24766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24766, 'data-value': derived.doubled }, children);
}
export default Component24766;
