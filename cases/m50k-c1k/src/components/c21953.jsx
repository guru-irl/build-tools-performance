import React from 'react';
const LABEL_21953 = 'component_21953';
export function Component21953({ value = 21953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21953, 'data-value': derived.doubled }, children);
}
export default Component21953;
