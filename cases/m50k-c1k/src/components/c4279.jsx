import React from 'react';
const LABEL_4279 = 'component_4279';
export function Component4279({ value = 4279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4279, 'data-value': derived.doubled }, children);
}
export default Component4279;
