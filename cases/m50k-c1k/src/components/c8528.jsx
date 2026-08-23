import React from 'react';
const LABEL_8528 = 'component_8528';
export function Component8528({ value = 8528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8528, 'data-value': derived.doubled }, children);
}
export default Component8528;
