import React from 'react';
const LABEL_24502 = 'component_24502';
export function Component24502({ value = 24502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24502, 'data-value': derived.doubled }, children);
}
export default Component24502;
