import React from 'react';
const LABEL_14614 = 'component_14614';
export function Component14614({ value = 14614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14614, 'data-value': derived.doubled }, children);
}
export default Component14614;
