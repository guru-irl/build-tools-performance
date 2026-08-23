import React from 'react';
const LABEL_13481 = 'component_13481';
export function Component13481({ value = 13481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13481, 'data-value': derived.doubled }, children);
}
export default Component13481;
