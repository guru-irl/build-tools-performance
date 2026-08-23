import React from 'react';
const LABEL_25614 = 'component_25614';
export function Component25614({ value = 25614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25614, 'data-value': derived.doubled }, children);
}
export default Component25614;
