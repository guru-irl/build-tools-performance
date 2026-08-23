import React from 'react';
const LABEL_12327 = 'component_12327';
export function Component12327({ value = 12327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12327, 'data-value': derived.doubled }, children);
}
export default Component12327;
