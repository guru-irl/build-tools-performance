import React from 'react';
const LABEL_26630 = 'component_26630';
export function Component26630({ value = 26630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26630, 'data-value': derived.doubled }, children);
}
export default Component26630;
