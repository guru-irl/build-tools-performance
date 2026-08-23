import React from 'react';
const LABEL_46614 = 'component_46614';
export function Component46614({ value = 46614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46614, 'data-value': derived.doubled }, children);
}
export default Component46614;
