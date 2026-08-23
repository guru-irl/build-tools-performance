import React from 'react';
const LABEL_5614 = 'component_5614';
export function Component5614({ value = 5614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5614, 'data-value': derived.doubled }, children);
}
export default Component5614;
