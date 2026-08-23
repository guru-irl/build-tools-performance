import React from 'react';
const LABEL_24883 = 'component_24883';
export function Component24883({ value = 24883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24883, 'data-value': derived.doubled }, children);
}
export default Component24883;
