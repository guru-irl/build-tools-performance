import React from 'react';
const LABEL_38334 = 'component_38334';
export function Component38334({ value = 38334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38334, 'data-value': derived.doubled }, children);
}
export default Component38334;
