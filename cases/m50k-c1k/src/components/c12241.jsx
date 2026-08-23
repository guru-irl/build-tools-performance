import React from 'react';
const LABEL_12241 = 'component_12241';
export function Component12241({ value = 12241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12241, 'data-value': derived.doubled }, children);
}
export default Component12241;
