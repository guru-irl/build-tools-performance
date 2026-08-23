import React from 'react';
const LABEL_38608 = 'component_38608';
export function Component38608({ value = 38608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38608, 'data-value': derived.doubled }, children);
}
export default Component38608;
