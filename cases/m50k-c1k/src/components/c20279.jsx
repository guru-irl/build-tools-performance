import React from 'react';
const LABEL_20279 = 'component_20279';
export function Component20279({ value = 20279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20279, 'data-value': derived.doubled }, children);
}
export default Component20279;
