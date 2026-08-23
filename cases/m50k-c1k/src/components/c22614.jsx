import React from 'react';
const LABEL_22614 = 'component_22614';
export function Component22614({ value = 22614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22614, 'data-value': derived.doubled }, children);
}
export default Component22614;
