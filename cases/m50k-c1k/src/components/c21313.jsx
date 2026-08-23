import React from 'react';
const LABEL_21313 = 'component_21313';
export function Component21313({ value = 21313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21313, 'data-value': derived.doubled }, children);
}
export default Component21313;
