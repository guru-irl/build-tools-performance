import React from 'react';
const LABEL_23738 = 'component_23738';
export function Component23738({ value = 23738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23738, 'data-value': derived.doubled }, children);
}
export default Component23738;
