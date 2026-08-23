import React from 'react';
const LABEL_11279 = 'component_11279';
export function Component11279({ value = 11279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11279, 'data-value': derived.doubled }, children);
}
export default Component11279;
