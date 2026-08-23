import React from 'react';
const LABEL_23070 = 'component_23070';
export function Component23070({ value = 23070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23070, 'data-value': derived.doubled }, children);
}
export default Component23070;
