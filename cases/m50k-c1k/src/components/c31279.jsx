import React from 'react';
const LABEL_31279 = 'component_31279';
export function Component31279({ value = 31279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31279, 'data-value': derived.doubled }, children);
}
export default Component31279;
