import React from 'react';
const LABEL_33824 = 'component_33824';
export function Component33824({ value = 33824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33824, 'data-value': derived.doubled }, children);
}
export default Component33824;
