import React from 'react';
const LABEL_33389 = 'component_33389';
export function Component33389({ value = 33389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33389, 'data-value': derived.doubled }, children);
}
export default Component33389;
