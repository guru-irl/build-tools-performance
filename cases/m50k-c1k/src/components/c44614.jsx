import React from 'react';
const LABEL_44614 = 'component_44614';
export function Component44614({ value = 44614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44614, 'data-value': derived.doubled }, children);
}
export default Component44614;
