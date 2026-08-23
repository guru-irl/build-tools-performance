import React from 'react';
const LABEL_15766 = 'component_15766';
export function Component15766({ value = 15766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15766, 'data-value': derived.doubled }, children);
}
export default Component15766;
