import React from 'react';
const LABEL_12853 = 'component_12853';
export function Component12853({ value = 12853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12853, 'data-value': derived.doubled }, children);
}
export default Component12853;
