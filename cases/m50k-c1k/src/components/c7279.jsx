import React from 'react';
const LABEL_7279 = 'component_7279';
export function Component7279({ value = 7279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7279, 'data-value': derived.doubled }, children);
}
export default Component7279;
