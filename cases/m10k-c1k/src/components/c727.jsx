import React from 'react';
const LABEL_727 = 'component_727';
export function Component727({ value = 727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_727, 'data-value': derived.doubled }, children);
}
export default Component727;
