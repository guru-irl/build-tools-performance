import React from 'react';
const LABEL_33481 = 'component_33481';
export function Component33481({ value = 33481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33481, 'data-value': derived.doubled }, children);
}
export default Component33481;
