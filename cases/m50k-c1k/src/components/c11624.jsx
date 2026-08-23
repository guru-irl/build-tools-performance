import React from 'react';
const LABEL_11624 = 'component_11624';
export function Component11624({ value = 11624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11624, 'data-value': derived.doubled }, children);
}
export default Component11624;
