import React from 'react';
const LABEL_38605 = 'component_38605';
export function Component38605({ value = 38605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38605, 'data-value': derived.doubled }, children);
}
export default Component38605;
