import React from 'react';
const LABEL_38276 = 'component_38276';
export function Component38276({ value = 38276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38276, 'data-value': derived.doubled }, children);
}
export default Component38276;
