import React from 'react';
const LABEL_15941 = 'component_15941';
export function Component15941({ value = 15941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15941, 'data-value': derived.doubled }, children);
}
export default Component15941;
