import React from 'react';
const LABEL_25493 = 'component_25493';
export function Component25493({ value = 25493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25493, 'data-value': derived.doubled }, children);
}
export default Component25493;
