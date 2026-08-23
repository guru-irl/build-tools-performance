import React from 'react';
const LABEL_44672 = 'component_44672';
export function Component44672({ value = 44672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44672, 'data-value': derived.doubled }, children);
}
export default Component44672;
