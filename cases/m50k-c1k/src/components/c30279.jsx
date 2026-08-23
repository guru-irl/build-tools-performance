import React from 'react';
const LABEL_30279 = 'component_30279';
export function Component30279({ value = 30279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30279, 'data-value': derived.doubled }, children);
}
export default Component30279;
