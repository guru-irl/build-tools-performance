import React from 'react';
const LABEL_23630 = 'component_23630';
export function Component23630({ value = 23630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23630, 'data-value': derived.doubled }, children);
}
export default Component23630;
