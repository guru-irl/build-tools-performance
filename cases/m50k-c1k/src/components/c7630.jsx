import React from 'react';
const LABEL_7630 = 'component_7630';
export function Component7630({ value = 7630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7630, 'data-value': derived.doubled }, children);
}
export default Component7630;
