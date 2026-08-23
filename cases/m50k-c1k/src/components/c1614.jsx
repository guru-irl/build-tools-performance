import React from 'react';
const LABEL_1614 = 'component_1614';
export function Component1614({ value = 1614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1614, 'data-value': derived.doubled }, children);
}
export default Component1614;
