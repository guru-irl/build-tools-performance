import React from 'react';
const LABEL_12738 = 'component_12738';
export function Component12738({ value = 12738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12738, 'data-value': derived.doubled }, children);
}
export default Component12738;
