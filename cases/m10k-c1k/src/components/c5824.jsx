import React from 'react';
const LABEL_5824 = 'component_5824';
export function Component5824({ value = 5824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5824, 'data-value': derived.doubled }, children);
}
export default Component5824;
