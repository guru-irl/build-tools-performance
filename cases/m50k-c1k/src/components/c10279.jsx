import React from 'react';
const LABEL_10279 = 'component_10279';
export function Component10279({ value = 10279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10279, 'data-value': derived.doubled }, children);
}
export default Component10279;
