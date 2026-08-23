import React from 'react';
const LABEL_34279 = 'component_34279';
export function Component34279({ value = 34279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34279, 'data-value': derived.doubled }, children);
}
export default Component34279;
