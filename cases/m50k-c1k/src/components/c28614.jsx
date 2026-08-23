import React from 'react';
const LABEL_28614 = 'component_28614';
export function Component28614({ value = 28614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28614, 'data-value': derived.doubled }, children);
}
export default Component28614;
