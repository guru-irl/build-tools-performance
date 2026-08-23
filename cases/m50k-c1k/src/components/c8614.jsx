import React from 'react';
const LABEL_8614 = 'component_8614';
export function Component8614({ value = 8614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8614, 'data-value': derived.doubled }, children);
}
export default Component8614;
