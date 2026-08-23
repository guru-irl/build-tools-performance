import React from 'react';
const LABEL_21193 = 'component_21193';
export function Component21193({ value = 21193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21193, 'data-value': derived.doubled }, children);
}
export default Component21193;
