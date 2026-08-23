import React from 'react';
const LABEL_15200 = 'component_15200';
export function Component15200({ value = 15200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15200, 'data-value': derived.doubled }, children);
}
export default Component15200;
