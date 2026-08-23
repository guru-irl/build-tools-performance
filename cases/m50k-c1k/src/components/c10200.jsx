import React from 'react';
const LABEL_10200 = 'component_10200';
export function Component10200({ value = 10200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10200, 'data-value': derived.doubled }, children);
}
export default Component10200;
