import React from 'react';
const LABEL_21766 = 'component_21766';
export function Component21766({ value = 21766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21766, 'data-value': derived.doubled }, children);
}
export default Component21766;
