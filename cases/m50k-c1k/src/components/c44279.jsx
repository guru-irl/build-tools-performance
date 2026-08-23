import React from 'react';
const LABEL_44279 = 'component_44279';
export function Component44279({ value = 44279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44279, 'data-value': derived.doubled }, children);
}
export default Component44279;
