import React from 'react';
const LABEL_23481 = 'component_23481';
export function Component23481({ value = 23481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23481, 'data-value': derived.doubled }, children);
}
export default Component23481;
