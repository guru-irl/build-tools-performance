import React from 'react';
const LABEL_6818 = 'component_6818';
export function Component6818({ value = 6818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6818, 'data-value': derived.doubled }, children);
}
export default Component6818;
