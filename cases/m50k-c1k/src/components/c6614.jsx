import React from 'react';
const LABEL_6614 = 'component_6614';
export function Component6614({ value = 6614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6614, 'data-value': derived.doubled }, children);
}
export default Component6614;
